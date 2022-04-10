<template>
  <div class="container" data-app="true">
    <div v-if="error.statusCode === 404">
      <e404Page></e404Page>
    </div>
    <h1 v-else>出现错误</h1>
    <NuxtLink to="/">返回</NuxtLink>
  </div>
</template>

<script>
import e404Page from '~/pages/e404Page.vue'
// import NuxtLink from '@/components/NuxtLink.vue'

export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
  components: {
    // NuxtLink,
    e404Page
  }
}
</script>
<style>
.container {
  text-align: center;
  padding: 100px;
}
</style>