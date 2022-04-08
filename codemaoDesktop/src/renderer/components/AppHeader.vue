<template>
  <div class="wrapper"
    elevation="1"
  >
      <p class="title">{{title}}</p>
      <div class="user-info-wrapper" v-if="isLogin">
        <p>{{nickname}}</p>
      </div>
      <NuxtLink class="user-info-wrapper" v-if="!isLogin" to="/login">
        <p>未登录(若已登录,请刷新页面)</p>
      </NuxtLink>
      <div class="right-wrapper">
          <v-btn
            color="#7B68EE"
            elevation="0"
            fab
            x-small
            @click="minisize()"
          >
            <v-icon color="#ffffff">
              mdi-minus
            </v-icon>
          </v-btn>
          <v-btn
            color="#DC143C"
            elevation="0"
            fab
            x-small
            @click="close()"
          >
            <v-icon color="#ffffff">
              mdi-close
            </v-icon>
          </v-btn>
      </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron';
var mIsLogin = false;
var mUser_info = {
  nickname:""
};
if(localStorage.getItem("isLogin") == "true"){
    mIsLogin = true;
    mUser_info = JSON.parse(localStorage.getItem("user_info"));
    console.log(localStorage.getItem("user_info"));
}
export default {
  data () {
    return {
        title:"编程猫桌面",
        nickname: mUser_info.nickname,
        isLogin: mIsLogin
    }
  },
  methods:{
    close(){
        ipcRenderer.send('window-close');
    },
    minisize(){
        ipcRenderer.send('window-minimize');
    },
    toUrl(url){
        this.$router.push(url);
    }
  }
}
</script>

<style scoped>
.wrapper{
    /* position: absolute; */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 92vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 213, 0);
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    -webkit-app-region: drag;
}
.title{
    position: absolute;
    left: 10px;
}
.right-wrapper{
  position: absolute;
  right: 10px;
}
</style>
