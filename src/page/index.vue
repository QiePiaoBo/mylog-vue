<template>
  <div>
    <div>test router</div>
    <router-link to="/api/blog/getUser">test axios</router-link>
    <div>{{info}}</div>
  </div>
</template>

<script>
  export default {
    name: "index",

    data() {
      return {
        info: null
      }
    },
    mounted() {
      this.$api.user.getUser()
        .then(response => (this.info = response))
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>

</style>
