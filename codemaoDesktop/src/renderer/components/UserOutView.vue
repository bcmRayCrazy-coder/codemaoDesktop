<template>
    <div>
        <p>
            <v-avatar
            size="20px"
            color="orange">
                <img :src="user_info.avatar_url" alt="加载中">
            </v-avatar>
            {{user_info.nickname}}
        </p>
    </div>
</template>
<script>
export default {
    props: {
        user_info:{
            type: Object,
            required: true
        },
    },
    mounted() {
        console.log(this.user_info)
    },
}
</script>
<style>
</style>