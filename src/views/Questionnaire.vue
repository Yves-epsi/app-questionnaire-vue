<template>
  <div class="questionnaire">
    <YGQuestionnaire :infos=infos />
  </div>
</template>

<script>
// @ is an alias to /src
import YGQuestionnaire from '@/components/Questionnaire.vue'

export default {
  name: 'questionnaire',
  props: ['infos'],
  components: {
    YGQuestionnaire
  }
}
</script>
