# rou

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#router mach show in city component
#router childred show in home component.
第一：动态路由匹配
    把某种模式匹配到的所有路由，全都映射到同个组件。
    等于是在path：/home/:usename中的usename 是个变量，是个任何值都可以，并且保存到了$route.params.usename 中。
第二：嵌套路由
    首先url 分为两部分，前部匹配父组件的 path；父组件显示，并且父组件要有router-view容器，准备装子组件。
    后部分匹配子组件的 path ，子组件不要加/,子组件显示在父组件的容器里面。
第三：编程式导航
    申明式 <router-link :to="...">
    等于编程式 this.$router.push(...)
第四：命名路由
    直接找路由的 name，而不是通过 path。
    以前是 to 后面是路径。路径再匹配 组件。
    :to="{ name: 'user', params: { userId: 123 }}"  name 是组件的名字。
   
    
第五：命名视图
    视图指定 显示组件。一个路由匹配成功，两个组件显示在不同的独立的视图里面。
    首先router-view 有个 name =a；
     path: '/view',  //这个路由 有三个组件要显示。
      components: {
        default: Foo,
        a: Bar,      //显示在对应 name =a 的视图里面。
        b: Baz
      }
第六：重定向和别名
    { path: '/a', redirect: '/b' }
    本来是到a的，现在是b路由显示。
第七：路由组件传参
    1.可以通过 动态路由匹配，path："/home/:id",组件中则 $route.params.id 获得数据。
    2.

进阶：
第一：导航守卫
第二：路由元信息
第三：过度动效
第四:数据获取
第五：滚动行为
第六：路由懒加载

http://sc.chinaz.com/jiaoben/140317072100.htm#down


