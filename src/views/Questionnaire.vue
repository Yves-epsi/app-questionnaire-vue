<template>
  <div class="questionnaire">
    <h1>This is an about page</h1>
    <YGQuestionnaire/>
  </div>
</template>

<script>
// @ is an alias to /src
import YGQuestionnaire from '@/components/Questionnaire.vue'

export default {
  name: 'questionnaire',
  components: {
    YGQuestionnaire
  }
}
</script>
