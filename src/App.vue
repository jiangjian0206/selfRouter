<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <router-link to="/home">home</router-link>
    <router-link
      v-for="(val,vkey,index) in list"
      :to="`/City/${val.name}/post/${val.num}`"
      :key="index"
    >city</router-link>
    <!-- <router-link to="/City/jiangjin/post/2"> city</router-link> -->
    <!-- <router-link to="/City/jiangjin/post/2"> city</router-link> -->

    <router-view>注册一下</router-view>
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
      ]
    };
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
</style>
