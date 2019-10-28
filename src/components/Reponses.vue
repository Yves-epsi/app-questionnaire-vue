<template>
<div>
<div v-for="question in reponses" :key="question.id">
    <b-form-group :label="question.enonce">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected">
        <b-form-checkbox v-for="reponse in question.reponses" :key="reponse" :value="reponse" disabled button>{{ reponse }}</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
</div>
</div>
</template>

<script>
import questions from '../assets/questions.json'

export default {
  name: 'YGREponses',
  data: function () {
    return {
      selected: []
    }
  },
  created () {
    this.reponses.forEach(element => {
      element.solutions.forEach(reponse => {
        this.selected.push(element.reponses[reponse])
      })
    })
  },
  computed: {
    reponses () {
      return questions.questions
    }
  }
}
</script>
