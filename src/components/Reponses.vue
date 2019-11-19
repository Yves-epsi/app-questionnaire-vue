<template>
<div>
<h2>score : {{this.score}} / {{this.infos.questions}}</h2>
    <p>Toutes les questions du questionnaires sont affichées, il y en peut-être même que vous n'avez pas faites mais vous pouvez
      quand même les lire pour vous améliorer
    </p>
    <p>
      Vos réponses sont les cases cochées et les bonnes réponses sont soulignées en vert
    </p>
<div v-for="question in questions" :key="question.id">
    <b-form-group :label="question.enonce">
      <b-form-checkbox-group id="checkbox-group-2" v-model="reponses">
        <div v-for="choix in question.reponses" :key="choix">
          <div v-if="bonne(choix)"><b-form-checkbox  :value="choix" disabled class='green' button>{{ choix }}</b-form-checkbox></div>
          <div v-else><b-form-checkbox  :value="choix" disabled button>{{ choix }}</b-form-checkbox></div>
        </div>
      </b-form-checkbox-group>
    </b-form-group>
</div>
<b-button variant="primary" @click="retourAcceuil">Retourner à la page d'acceuil</b-button>
</div>
</template>

<script>
import questions from '../assets/questions.json'
import PouchDB from 'pouchdb'

var db = new PouchDB('users')

export default {
  name: 'YGREponses',
  props: {
    reponses: {
      required: true
    },
    infos: {
      required: true
    }
  },
  data: function () {
    return {
      score: 0,
      bonnesReponses: [],
      isGood: true
    }
  },
  created () {
    db.replicate.to('http://localhost:5984/app-questionnaire-vue')
    this.questions.forEach(element => { // Ajoute les solutions à la liste des bonnes réponses
      element.solutions.forEach(reponse => {
        this.bonnesReponses.push(element.reponses[reponse])
      })
    })
    this.reponses.forEach(element => { // Calcul du score
      if (this.bonnesReponses.includes(element)) {
        this.score += 1
      } else {
        this.score -= 0.5
      }
    })
    db.put({ // Mise du résultat en base
      _id: new Date(),
      nom: this.infos.nom,
      prenom: this.infos.prenom,
      societe: this.infos.societe,
      score: this.score + '/' + this.infos.questions
    }).catch(function (err) {
      console.log(err)
    })
  },
  methods: {
    bonne (value) { // Retourne si c'est une bonne réponse
      if (this.bonnesReponses.includes(value)) {
        return true
      } else {
        return false
      }
    },
    retourAcceuil () { // Retour à l'acceuil
      this.$router.push({ name: 'login' })
    }
  },
  computed: {
    questions () { // Récupère les questions du fichier Json
      return questions.questions
    }
  }
}
</script>

<style>
  .green{
    text-decoration: greenyellow underline;
  }
</style>
