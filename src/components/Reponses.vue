<template>
<div>
<h2>score : {{this.score}}</h2>
<div v-for="question in questions" :key="question.id">
    <b-form-group :label="question.enonce">
      <b-form-checkbox-group id="checkbox-group-2" v-model="reponses">
        <div v-for="choix in question.reponses" :key="choix">
          <div v-if="bonne(choix)"><b-form-checkbox  :value="choix" disabled class='green' button>{{ choix }}</b-form-checkbox></div>
          <div v-else><b-form-checkbox  :value="choix" disabled button>{{ choix }}</b-form-checkbox></div>
        </div>
      </b-form-checkbox-group>
    </b-form-group>
</div>
</div>
</template>

<script>
import questions from '../assets/questions.json'

export default {
  name: 'YGREponses',
  props: {
    reponses: {
      required: true
    }
  },
  data: function () {
    return {
      score: 0,
      bonnesReponses: [],
      isGood: true
    }
  },
  created () {
    this.questions.forEach(element => {
      element.solutions.forEach(reponse => {
        this.bonnesReponses.push(element.reponses[reponse])
      })
    })
    this.reponses.forEach(element => {
      if (this.bonnesReponses.includes(element)) {
        this.score += 1
      } else {
        this.score -= 0.5
      }
    })
  },
  methods: {
    bonne (value) {
      if (this.bonnesReponses.includes(value)) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    questions () {
      return questions.questions
    }
  }
}
</script>

<style>
  .green{
    text-decoration: greenyellow underline;
  }
</style>
