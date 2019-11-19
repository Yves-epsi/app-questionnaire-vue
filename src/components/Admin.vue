<template>
  <div>
      <h1>Interface Admin</h1>
      <!--<b-table striped hover :items="docs" v-if="!isFetching"></b-table>-->
      <div v-if="!isFetching">yo<p v-for="doc in docs" :key="doc.id"> {{docs}}</p></div>
      <div v-if="isFetching"><p>{{docs}}</p></div>
  </div>
</template>

<script>
import PouchDB from 'pouchdb'

var db = new PouchDB('http://localhost:5984/app-questionnaire-vue') // créer la bdd

export default {
  name: 'YGAdmin',
  data () {
    return {
      docs: [],
      isFetching: true
    }
  },
  created () {
    this.isFetching = this.getAll()
  },
  methods: {
    getAll () {
      this.docs = db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        return result.rows
      }).catch(function (err) {
        console.log(err)
      })
      return false
    }
  }
}
</script>
