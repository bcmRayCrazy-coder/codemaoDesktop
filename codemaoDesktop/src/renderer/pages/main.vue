<template>
    <div class="e-nuxt-container">
    <div class="e-nuxt-content">
        <p>{{token}}</p>
    </div>
    </div>
</template>
<script>
var token = localStorage.getItem("token");
export default {
    name: 'MainPage',
    data () {
        return {
            token
        }
    },
    methods: {
        
    }
}
</script>
<style>
.e-nuxt-container {
    min-height: calc(100vh - 50px);
    font-family: Helvetica, sans-serif;
}
.e-nuxt-content{
    display: flex;
    justify-content: space-around;
    padding-top: 100px;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>