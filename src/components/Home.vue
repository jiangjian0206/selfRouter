<template>
    <div>
        <h1>here is home page.</h1>
        <h2>{{$route.params.id}}</h2>
        <router-link to=""></router-link>
        <router-view>   </router-view>
        <router-view class="view one" name="b"></router-view>
        <router-view class="view two" name="a"></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>

