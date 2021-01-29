
<template>
  <div>
    <h2>User</h2>
    <p>我是 用户{{userId}}</p>
  </div>
</template>
<script>
export default {
    name: 'User',
    computed:{
        userId(){
            return this.$route.params.userid
        },
      
    },
    

} 
</script>