<template>
<div>
    <YGQuestion ref="reponses" :questionNumber=question />
    <b-button variant="primary" :disabled="disable" v-on:click="previous">Question précédente</b-button>
    <b-button variant="primary" v-on:click="next" :hidden="fin">Question suivante</b-button>
    <b-button variant="primary" v-on:click="end" :hidden="!fin">Finir le test</b-button>
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
      disable: true,
      fin: false
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
      if (this.question < this.nbQuestions) {
        this.fin = false
      }
    },
    next (evt) {
      evt.preventDefault()
      if (this.question < this.nbQuestions) {
        this.question += 1
        console.log(this.$refs.reponses.selected)
      }
      if (this.question === this.nbQuestions) {
        this.fin = true
      }
      if (this.question > 0) {
        this.disable = false
      }
    },
    end (evt) {
      evt.preventDefault()
      this.selected = YGQuestion.data
      console.log(this.selected)
      this.$router.push('reponses')
    }
  }
}
</script>
