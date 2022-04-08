<template>
    <div class="e-nuxt-container">
        <div class="e-nuxt-content">
            <!-- <p>{{token}}</p> -->
            <div class="posts">
                <PostOutView v-for="post in posts" :key="post.id" :title="post.title" :content="post.content" :id="post.id" :author="post.user"></PostOutView>
            </div>
        </div>
    </div>
</template>
<script>
import PostOutView from '~/components/PostOutView.vue'
import axios from 'axios'

var token = localStorage.getItem("token");

export default {
    name: 'MainPage',
    data () {
        return {
            token,
            posts: [
                {
                    title: 'Hello World',
                    content: 'This is a post',
                    id: '1',
                    user: {
                        nickname: 'John Doe'
                    }
                },
                {
                    title: 'Hello World2',
                    content: 'This is a post yee',
                    id: '2',
                    user: {
                        nickname: 'nm'
                    }
                }
            ]
        }
    },
    methods: {
        
    },
    components: {
        PostOutView
    },
    mounted() {
        console.log("Mounted");
        this.posts = [];
        axios.get("https://api.codemao.cn/web/forums/posts/hots/all").then(res=>{
            var items = res.data.items;
            items.slice(0,10).forEach(post_id=>{
                axios.get(`https://api.codemao.cn/web/forums/posts/${post_id}/details`).then(({data:info})=>{
                    console.log(info);
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
}
.posts{
    width: 40%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 20px;
}
</style>