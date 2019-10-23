<template>
  <div class="home">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import YGLogin from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>
