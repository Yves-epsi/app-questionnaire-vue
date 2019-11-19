<template>
<div>
    <YGQuestion ref="reponses" :questionNumber=question[numero] />
    <b-button variant="primary" :disabled="disable" v-on:click="previous">Question précédente</b-button>
    <b-button variant="primary" v-on:click="next" :hidden="fin">Question suivante</b-button>
    <b-button variant="primary" v-on:click="end" :hidden="!fin">Finir le test</b-button>
</div>
</template>

<script>
import YGQuestion from './Question.vue'

export default {
  name: 'YGQuestionnaire',
  props: {
    infos: {
      required: true
    }
  },
  data: function () {
    return {
      question: [],
      numero: 0,
      disable: true,
      fin: false,
      nbQuestions: this.infos.questions - 1
    }
  },
  components: {
    YGQuestion
  },
  created () {
    for (var i = 0; i <= this.nbQuestions; i++) {
      let numeroQuestion
      do {
        numeroQuestion = Math.floor(Math.random() * (this.nbQuestions + 1))
      } while (this.question.includes(numeroQuestion))
      this.question[i] = numeroQuestion
    }
  },
  methods: {
    previous (evt) {
      evt.preventDefault()
      this.numero -= 1
      if (this.numero === 0) {
        this.disable = true
      }
      if (this.numero < this.nbQuestions) {
        this.fin = false
      }
    },
    next (evt) {
      evt.preventDefault()
      if (this.numero < this.nbQuestions) {
        this.numero += 1
      }
      if (this.numero === this.nbQuestions) {
        this.fin = true
      }
      if (this.numero > 0) {
        this.disable = false
      }
    },
    end (evt) {
      evt.preventDefault()
      this.selected = YGQuestion.data
      this.$router.push({
        name: 'reponses',
        params: {
          'reponses': this.$refs.reponses.selected,
          'infos': this.infos
        }
      })
    }
  }
}
</script>
