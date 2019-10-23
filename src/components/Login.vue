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

      <b-button type="submit" variant="primary">Commencer le test</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'YGLogin',
  data () {
    return {
      form: {
        nom: '',
        prenom: '',
        societe: ''
      },
      show: true
    }
  },
  methods: {
    yGonSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      this.$router.push('questionnaire')
    }
  }
}
</script>
