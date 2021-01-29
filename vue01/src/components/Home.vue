
<template>
  <div>
    <h2>Home</h2>
    <p>home hehhhehe</p>
    <router-link to="/home/news">新聞</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    name: 'Home',
    data(){
      return{
        message:'ni hao',
        path:'/home/news'
      }
    },
    //只有，组件被保持了状态使用了keep-alive时，才会有效
activated(){
  this.$router.push(this.path)
},

  beforeRouteLeave (to, from, next) {
      console.log(this.$route.path)
    this.path=from.path
    next()
}



}
</script>