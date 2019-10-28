<template>
  <div class="questionnaire">
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
