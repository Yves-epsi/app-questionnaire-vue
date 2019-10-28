<template>
  <div class="reponses">
    <YGReponses :reponses=reponses />
  </div>
</template>

<script>
import YGReponses from '@/components/Reponses.vue'

export default {
  name: 'reponses',
  props: ['reponses'],
  components: {
    YGReponses
  }
}
</script>
