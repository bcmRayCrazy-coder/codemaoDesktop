<template>
  <div>
    <AppHeader class="app-header" />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader
  },
}
</script>

<style>
body {
  margin: 0 !important;
}
.app-header{
  position: fixed;
  z-index: 100;
}
</style>
