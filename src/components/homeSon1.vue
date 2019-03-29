<template>
  <div class="content">
   <a href="#"> 首先url 分为两部分，前部匹配父组件的 path；父组件显示，并且父组件要有router-view容器，准备装子组件。
    后部分匹配子组件的 path ，子组件不要加/,子组件显示在父组件的容器里面。</a>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
a{
  width: 200px;
}
</style>
