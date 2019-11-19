<template>
  <div>
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
  </div>
</template>

<script>
import questions from '../assets/questions.json'

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
      show: true
    }
  },
  computed: {
    nbQuestions () {
      return questions.nbQuestions
    }
  },
  methods: {
    yGonSubmit (evt) {
      evt.preventDefault()
      this.$router.push({ name: 'questionnaire', params: { 'infos': this.form } })
    }
  }
}
</script>
