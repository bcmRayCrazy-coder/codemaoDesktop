<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">没找到该页面</h1>
    <h1 v-else>出现错误</h1>
    <NuxtLink to="/">返回</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>