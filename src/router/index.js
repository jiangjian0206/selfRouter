import Vue from 'vue'
import router from 'vue-router'

import Home from '../components/home.vue'
import City from '../components/City.vue'

Vue.use(router)

export default new router({
    routes:[
        {
            path:'/home：',
            component:Home
        },
        {
            path:'/city/:usename/post/:id',
            component:City
        }
    ]
})