<template>
  <div>
    <AppHeader />
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
</style>
