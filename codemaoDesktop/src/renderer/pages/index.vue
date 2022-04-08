<template>
  <div class="e-nuxt-container">
    <div class="e-nuxt-content">
      <div class="e-nuxt-system-info">
        <system-information />
      </div>
    </div>
    <div class="action-btns">
        <v-btn @click="toUrl('/login')">
          <v-icon 
            left
            color="blue darken-2">
            mdi-account
          </v-icon>
          <span>登录</span>
        </v-btn>
    </div>
    <div class="e-nuxt-links">
      <v-btn @click="openURL('https://github.com/bcmRayCrazy-coder/codemaoDesktop')">
        Github
      </v-btn>
      <v-btn class="btn-second" @click="openURL('https://nuxtjs.org/guide')">
        官网
      </v-btn>
    </div>
  </div>
</template>

<script>
import SystemInformation from '@/components/SystemInformation.vue'

export default {
  name: 'IndexPage',
  components: {
    SystemInformation
  },
  data () {
    return {
      externalContent: ''
    }
  },
  methods: {
    openURL (url) {
      window.open(url)
    },
    toUrl(url){
        this.$router.push(url);
    }
  }
}
</script>

<style>
.e-nuxt-container {
  min-height: calc(100vh - 50px);
  font-family: Helvetica, sans-serif;
}

.e-nuxt-content {
  display: flex;
  justify-content: space-around;
  padding-top: 100px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.e-nuxt-system-info {
  padding: 20px;
  border-top: 1px solid #ffc107;
  border-bottom: 1px solid #ffc107;
}

.action-btns{
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.e-nuxt-links {
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

v-btn {
  color: #364758;
  padding: 5px 20px;
  margin: 0 20px;
  border-radius: 15px;
  font-size: 1rem;
}

v-btn:hover{
  cursor: pointer;
}

.btn-second{
  margin-left: 35px;
}
</style>
