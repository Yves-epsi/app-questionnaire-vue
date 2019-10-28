<template>
  <div class="home">
    <YGLogin/>
  </div>
</template>

<script>
// @ is an alias to /src
import YGLogin from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    YGLogin
  }
}
</script>
