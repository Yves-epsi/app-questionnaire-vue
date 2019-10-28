<template>
<div>
    <YGQuestion :questionNumber=question />
    <b-button variant="primary" :disabled="disable" v-on:click="previous">Question précédente</b-button>
    <b-button variant="primary" v-on:click="next">Question suivante</b-button>
</div>
</template>

<script>
import YGQuestion from './Question.vue'
import questions from '../assets/questions.json'

export default {
  name: 'YGQuestionnaire',
  data: function () {
    return {
      question: 0,
      disable: true
    }
  },
  components: {
    YGQuestion
  },
  computed: {
    nbQuestions () {
      return questions.nbQuestions - 1
    }
  },
  methods: {
    previous (evt) {
      evt.preventDefault()
      this.question -= 1
      if (this.question === 0) {
        this.disable = true
      }
    },
    next (evt) {
      evt.preventDefault()
      if (this.question < this.nbQuestions) {
        this.question += 1
      }
      if (this.question > 0) {
        this.disable = false
      }
    }
  }
}
</script>
