<template>
 <tab-bar>
      <tab-bar-item path="/home" activeColor="red"><img slot="item-icon" src="@/assets/img/tabbar/home.png">
           <img slot="item-icon-active" src="@/assets/img/tabbar/home1.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
      <tab-bar-item path="/category"><img slot="item-icon" src="@/assets/img/tabbar/Category.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/Category1.png">
      <div slot="item-text">分类</div></tab-bar-item>
      <tab-bar-item path="/buy"><img slot="item-icon" src="@/assets/img/tabbar/Buy.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/Buy1.png">
      <div slot="item-text">购物车</div></tab-bar-item>
      <tab-bar-item path="/setting"><img slot="item-icon" src="@/assets/img/tabbar/Setting.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/Setting1.png">
      <div slot="item-text">设置</div></tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem'
export default {
    name: 'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }

};
</script>