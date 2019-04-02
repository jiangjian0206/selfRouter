<template>
<div>
  <!-- <h1>app</h1> -->
  <router-view></router-view>
 <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
 <!-- <mt-button type="default">default</mt-button> -->
 <!-- <span class="mui-tab-label">搜索</span> -->
</div>
  
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import checklist from "./components/checklist.vue"

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
    HelloWorld,
    checklist
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
