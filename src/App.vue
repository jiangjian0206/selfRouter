<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <router-link to="/home/2">home</router-link>
    <router-link to="/home/2/son1">homeson1</router-link>
    <router-link to="/home/2/son2">homeson2</router-link> <hr>
    <i>here is router programe</i> <hr>
    <!-- <router-link  v-on:click.native="gotorouter()"  to="">333</router-link> -->
    <router-link :to="nameRouter">name router</router-link>
    <h1 @click="gotorouter()">333</h1>
    <router-link
      v-for="(val,vkey,index) in list"
      :to="`/City/${val.name}/post/${val.num}`"
      :key="index"
    >city</router-link>
    <!-- <router-link to="/City/jiangjin/post/2"> city</router-link> -->
    <!-- <router-link to="/City/jiangjin/post/2"> city</router-link> -->
    <div class="content">

      <router-view></router-view>
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
      nameRouter:{name:'home',params:{id:22}}
    };
  },
  methods:{
    gotorouter:function(){
      this.$router.history.replace({path:'/home'})
      console.log("ok")
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
a{
  display: inline-block;
  width: 100px;
  text-decoration: none;
}
.content{
  border: 1px solid red;
}
</style>
