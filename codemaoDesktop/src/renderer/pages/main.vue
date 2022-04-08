<template>
    <div class="e-nuxt-container">
        <div class="e-nuxt-content">
            <div class="post-wrapper">
                <h1>帖子列表</h1>
                <!-- <div class="posts"> -->
                    <PostOutView class="posts" v-for="post in posts" :key="post.id" :title="post.title" :content="post.content" :id="post.id" :author="post.user"></PostOutView>
                <!-- </div> -->
            </div>
            <div class="user-wrapper">
                <h1>用户信息</h1>
                <!-- <p>{{ user_info }}</p> -->
                <p>头像: 
                    <v-avatar
                        size="20px"
                        color="orange"
                    >
                        <img :src="user_info.avatar_url" alt="头像加载中">
                    </v-avatar>
                </p>
                <p>昵称: {{user_info.nickname}}</p>
                <p>简介: {{user_info.description}}</p>
                <p>性别: {{(['女','男'])[user_info.sex]}}</p>

                <h1>粉丝列表</h1>
                <h5>(第{{fanPage + 1}}页 每页{{fanLimit}}个 共个{{fanTotal}}粉丝 共{{fanTotalPage}}页)</h5>
                <UserOutView v-for="f in fans" :user_info="f"></UserOutView>
            </div>
        </div>
    </div>
</template>
<script>
import PostOutView from '~/components/PostOutView.vue'
import UserOutView from '~/components/UserOutView.vue'
import axios from 'axios'

var token = localStorage.getItem("token");
var user_info = JSON.parse(localStorage.getItem("user_info"));

console.log("info");
console.log(user_info);
console.log(user_info.nickname);

export default {
    name: 'MainPage',
    data () {
        return {
            token,
            posts: [],
            user_info,
            fans:[],
            fanPage:0,
            fanLimit:10,
            fanTotal:'获取中',
            fanTotalPage:'获取中'
        }
    },
    methods: {
        
    },
    components: {
        PostOutView,
        UserOutView
    },
    mounted() {
        this.posts = [];
        axios.get("https://api.codemao.cn/web/forums/posts/hots/all").then(res=>{
            var items = res.data.items;
            items.slice(0,10).forEach(post_id=>{
                axios.get(`https://api.codemao.cn/web/forums/posts/${post_id}/details`).then(({data:info})=>{
                    // info.content = info.content.slice(0,25);
                    this.posts.push(info);
                }).catch(err=>{
                    console.error(err);
                });
            });
            items = null;
        }).catch(err=>{
            console.error(err);
        });
        axios.get(`https://api.codemao.cn/creation-tools/v1/user/fans?offset=${this.fanPage}&limit=${this.fanLimit}&user_id=${this.user_info.id}`).then(({data})=>{
            console.log(data);
            this.fanTotal = data.total;
            this.fanTotalPage = Math.ceil(data.total/this.fanLimit);
            data.items.forEach(fan=>{
                this.fans.push(fan);
            });
        })
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
    padding-top: 80px;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
}
.post-wrapper{
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 20px;
}
.posts{
    width: 100%;
    /* display: flex;
    flex-direction: column;
    flex-wrap: wrap; */
    padding: 0 20px;
}
.user-wrapper{
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 20px;
    overflow: scroll;
}
</style>