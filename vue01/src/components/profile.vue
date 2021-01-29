
<template>
  <div>
    <h2>profile</h2>
    <p>我是 profile</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>
<script>
export default {
    name: 'Profile',



}
</script>