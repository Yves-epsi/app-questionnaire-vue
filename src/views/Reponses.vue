<template>
  <div class="reponses">
    <YGReponses :reponses=reponses :infos=infos />
  </div>
</template>

<script>
import YGReponses from '@/components/Reponses.vue'

export default {
  name: 'reponses',
  props: ['reponses', 'infos'],
  components: {
    YGReponses
  }
}
</script>
