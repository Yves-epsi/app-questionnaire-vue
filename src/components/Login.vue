<template>
  <div>
    <b-toast id="echec-toast" title="Echec de l'authentification" variant='danger' no-auto-hide>
      Identifiant ou mdp erroné !
    </b-toast>
    <b-button variant="primary" @click="loginPage">Acceder à la partie admin</b-button>

    <b-form @submit="yGonSubmit" v-if="show">
    <b-form-group id="yg-input-group-1" label="Nom:" label-for="nom">
        <b-form-input
          id="nom"
          v-model="form.nom"
          required
          placeholder="Entrer votre prénom"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="yg-input-group-2" label="Prénom:" label-for="prenom">
        <b-form-input
          id="prenom"
          v-model="form.prenom"
          required
          placeholder="Entrer votre prénom"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="yg-input-group-3" label="Société:" label-for="societe">
        <b-form-input
          id="societe"
          v-model="form.societe"
          required
          placeholder="Entrer votre société"
        ></b-form-input>
      </b-form-group>

      <div>
        <label for="range-1">Nombre de questions</label>
        <b-form-input id="range-1" v-model="form.questions" type="range" min="2" :max=nbQuestions></b-form-input>
        <div class="mt-2">Nombre de questions: {{ form.questions }}</div>
      </div>

      <b-button type="submit" variant="primary">Commencer le test</b-button>
    </b-form>

    <b-form @submit="yGAdmin" v-if="!show">

    <h2>Connexion admin</h2>
    <b-form-group id="yg-input-group-4" label="Login:" label-for="login">
        <b-form-input
          id="login"
          v-model="admin.login"
          required
          placeholder="Login"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="yg-input-group-5" label="Password:" label-for="pwd">
        <b-form-input
          type="password"
          id="pwd"
          v-model="admin.pwd"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import questions from '../assets/questions.json'
import PouchDB from 'pouchdb'

var db = new PouchDB('admin') // créer la bdd

export default {
  name: 'YGLogin',
  data () {
    return {
      form: {
        nom: '',
        prenom: '',
        societe: '',
        questions: 5
      },
      show: true,
      admin: {
        login: '',
        pwd: ''
      }
    }
  },
  created () {
    db.put({
      _id: 'admin',
      password: 'admin'
    }).catch(function (err) {
      console.log(err)
    })
  },
  computed: {
    nbQuestions () {
      return questions.nbQuestions // Retourne le nombre de question dans le Json
    }
  },
  methods: {
    yGonSubmit (evt) {
      evt.preventDefault()
      this.$router.push({ name: 'questionnaire', params: { 'infos': this.form } }) // Lance le questionnaire et passe les infos de l'utilisateur
    },
    yGAdmin () {
      let login = this.admin.login
      let pwd = this.admin.pwd
      let router = this.$router
      let toast = this.$bvToast // Réaffecte les variables car le then() redéfini le this
      db.get('admin').then(function (res) {
        console.log(this)
        if (login === res._id && pwd === res.password) {
          router.push({ name: 'admin' }) // Dirige vers l'interface admin
        } else {
          toast.show('echec-toast') // Affiche un toast qui indique l'erreur
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    loginPage () {
      if (this.show === false) { // Permet de choisir quelle partie de l'acceuil afficher
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>
