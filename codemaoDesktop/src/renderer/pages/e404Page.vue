<template>
  <div>
        <v-dialog
            v-model="dialog"
            persistent :overlay="false"
            max-width="500px"
            transition="slide-y-transition"
            color="#EF5350"
        >
            <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          404 Not Found
        </v-card-title>

        <v-card-text>
          无法显示这个页面，因为它不存在或正在开发中。
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue"
            text
            @click="toUrl('/')"
          >
            返回
          </v-btn>
        </v-card-actions>
      </v-card>
        </v-dialog>
    </div>
  </div>
</template>

<script>

export default {
  name: 'e404Page',
  data () {
    return {
      dialog:true
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