<template>
    <div class="compenent_post_wrapper">
        <p class="post_title">{{author.nickname}} : {{title}} </p>
        <p class="post_content" id="content"></p>
        <NuxtLink :to="`/post/${id}`">
            查看
        </NuxtLink>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        author: {
            type: Object,
            required: true
        },
    },
    mounted() {
        this.$nextTick(() => {
            // document.getElementsByClassName("content").innerHTML = this.content;
        });
    }
}
</script>
<style>
.compenent_post_wrapper{
    margin-top: 30px;
}
.post_title{
    font-weight: bold;
}
</style>