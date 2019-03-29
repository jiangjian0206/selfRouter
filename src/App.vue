<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld/>
    <input type="text" v-model="val">
    <router-link :to="`/home/${val}`">动态路由匹配
    把某种模式匹配到的所有路由，全都映射到同个组件。home</router-link>
    <router-link to="/home/2/son1">路由嵌套第一个子组件显示homeson1</router-link>
    <router-link to="/home/2/son2">路由嵌套第二个子组件显示homeson2</router-link>
    <hr>
    <h2 @click="gotorouter()">编程式push触发</h2>
    <hr>
     <!-- <hr> -->
    <!-- <h2>命名路由</h2> -->
    <router-link :to="{ name: 'home', params: { id: 123 }}">命名路由</router-link>
    <hr>
    <!-- <i>here is router programe</i> -->
    <p>首先需要定义多个视图。一个路由匹配成功，两个组件显示在不同的独立的视图里面。</p>
    <router-link to="/view">命名视图</router-link>
    <hr>
    <!-- <router-link  v-on:click.native="gotorouter()"  to="">333</router-link> -->
    <!-- <router-link :to="nameRouter">name router</router-link> -->
    
    <router-link
      v-for="(val,vkey,index) in list"
      :to="`/City/${val.name}/post/${val.num}`"
      :key="index"
    >city</router-link>
    <!-- <router-link to="/City/jiangjin/post/2"> city</router-link> -->
    <!-- <router-link to="/City/jiangjin/post/2"> city</router-link> -->
    <div class="Appcontent">
      <div class="mainView">
        <router-view></router-view>
      </div>
      <div class="sonView">
        <router-view class="view one" name="b"></router-view>
        <router-view class="view two" name="a"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data() {
    return {
      list: [
        { name: "jiang1", num: 1 },
        { name: "jiang2", num: 2 },
        { name: "jiang3", num: 3 },
        { name: "jiang4", num: 4 }
      ],
      nameRouter: { name: "home", params: { id: 22 } },
      val:1
    };
  },
  methods: {
    gotorouter: function() {
      this.$router.replace({ path: "/home/3" });
      console.log("ok");
    }
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  display: inline-block;
  width: 100px;
  text-decoration: none;
  margin-left: 20px;
}
.Appcontent {
  border: 1px solid #55aa44;
  display: flex;
}
.mainView{
   background-color: rgba(220, 247, 202, 0.377);
}
.sonView{

}
</style>
