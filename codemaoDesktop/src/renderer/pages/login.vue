<template>
  <div class="e-nuxt-container">
    <div class="e-nuxt-content">
      <h1 class="login-title">登录</h1>
      <div class="login-inputs">
          <v-text-field label="用户名或编程猫id" v-model="username"></v-text-field>
          <v-text-field label="密码" type="password" v-model="pwd"></v-text-field>
          <p>{{state}}</p>
      </div>
      <div class="login-btns">
          <v-btn
            class="btn"
            color="#ffc107"
            @click="login"
          >登录</v-btn>
            <v-btn
                class="btn"
                color="#03a9f4"
                @click="toUrl('/')"
            >返回</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      username:"",
      pwd:"",
      state:""
    }
  },
  methods: {
      login(){
        this.state = "正在登录...";
        this.$axios.post('https://api.codemao.cn/tiger/v3/web/accounts/login',{
          pid:"65edCTyg",
          identity:this.username,
          password:this.pwd
        }).then(res=>{
          var data = res.data;
          console.log(data);
          if(res.status == 200){
            this.state = "登录成功";
            localStorage.setItem("token",data.auth.token);
            localStorage.setItem("user_info",JSON.stringify(data.user_info));
            localStorage.setItem("isLogin","true");
            this.$router.push('/main');
          }else{
            this.state = "登录失败,用户或密码错误";
          }
        }).catch(err=>{
          console.error(err);
          this.state = "登录失败:" + err;
        });
      },
      toUrl(url){
          this.$router.push(url);
      }
  },
  mounted() {
     this.$nextTick(()=>{
         if(localStorage.getItem("isLogin") == "true"){
             this.$router.push('/main');
         }
     });
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
    padding-top: 80px;
    align-items: flex-start;
    flex-wrap: wrap;
    min-width: 50%;
    flex-direction: column;
    align-content: center;
}

.login-title {
    border-bottom: 2px solid #ffc107;
    text-align: center;
    width: 50%;
}
.login-inputs{
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 50%;
}
.login-btns{
    padding: 10px 0;
    display: flex;
    justify-content: center;
    width: 50%;
}
.login-btns .btn{
    margin: 0 10px;
    width: 20%;
}
</style>
