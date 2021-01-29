<template>
  <div id="app">
  <!--router-link tag="button" to="/home" replace >home</router-link>
   <router-link tag="button"  to="/about" replace>about</router-link-->
   <button @click="btnh">home</button>
   <button @click="btna">about</button>
   <!--router-link tag="button"  :to="'/user/'+userid" replace>user</router-link>
   <router-link :to="{path:'/profile',query:{name:'chen',age:'28'}}">档案</router-link-->
   <button @click="btnu">user</button>
   <button @click="btnp">profile</button>
   <!--keep-alive可以保持 exclude排除组件-->
   <keep-alive exclude="Profile"><router-view/></keep-alive>
  </div>
</template>

<script>
export default {  
  name: 'App',
  data(){
    return {
      userid:'chen hao'
    }
  }
  ,
  methods:{
    btnh(){
      //this.$router.push('/home')
      this.$router.replace('/home')
    },
    btna(){
      //this.$router.push('/about')
      this.$router.replace('/about')
    },
      btnu(){
    
      this.$router.replace('/user/'+this.userid)
    },
       btnp(){
      
      this.$router.push({
        path:'/profile',
        query:{
          name:'chen hao',
          age :28,
          sex:'男'
        }
      })

    },

  }
}
</script>

<style>
.active{
  color:green;
}
</style>
