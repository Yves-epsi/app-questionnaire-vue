<template>
    <div>
    <b-form-group :label="question.enonce">
      <b-form-checkbox-group id="checkbox-group-2" v-model="selected">
        <b-form-checkbox v-for="reponse in question.reponses" :key="reponse" :value="reponse" button>{{ reponse }}</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>
  </div>
</template>

<script>
import questions from '../assets/questions.json'
export default {
  name: 'YGQuestion',
  data () {
    return {
      selected: [] // Array des réponses séléctionées
    }
  },
  props: {
    questionNumber: {
      type: Number,
      required: true
    }
  },
  computed: {
    question () {
      return questions.questions[this.questionNumber] // Retourne la question voulue
    }
  }
}
</script>
