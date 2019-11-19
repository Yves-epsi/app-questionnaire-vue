<template>
  <div>
      <h1>Interface Admin</h1>
      <b-container>
          <b-row>
            <b-col>Nom</b-col>
            <b-col>Prenom</b-col>
            <b-col>Société</b-col>
            <b-col>Score</b-col>
        </b-row>
        <b-row v-for="doc in docs" :key="doc.id">
            <b-col>{{doc.doc.nom}}</b-col>
            <b-col>{{doc.doc.prenom}}</b-col>
            <b-col>{{doc.doc.societe}}</b-col>
            <b-col>{{doc.doc.score}}</b-col>
        </b-row>
        </b-container>
        <b-button variant="primary" @click="retourAcceuil">Retourner à la page d'acceuil</b-button>
  </div>
</template>
<script>
import PouchDB from 'pouchdb'

var db = new PouchDB('http://localhost:5984/app-questionnaire-vue') // créer la bdd

export default {
  name: 'YGAdmin',
  data () {
    return {
      docs: []
    }
  },
  created () {
    this.isFetching = this.getAll()
  },
  methods: {
    getAll () { // Recupération des scores
      let res = this
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        res.docs = result.rows
      }).catch(function (err) {
        console.log(err)
      })
    },
    retourAcceuil () { // Retour à l'acceuil
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
