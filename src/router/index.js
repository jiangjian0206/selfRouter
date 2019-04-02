// @ts-nocheck
import Vue from 'vue'
import router from 'vue-router'

import Home from '../components/home.vue'
import City from '../components/City.vue'
import Homeson1 from '../components/Homeson1.vue'
import Homeson2 from '../components/Homeson2.vue'
import nameview2 from '../components/nameview2.vue'
import nameview1 from '../components/nameview.vue'
import checklist from '../components/checklist.vue'
import basic from '../components/basic.vue'

Vue.use(router)

export default new router({
    routes:[
        {
            path:'/',
            redirect:'/basic'
        },
        {
            path:'/basic',
            component:basic
        },
        {
            path:'/home/:id',
            name:'home',
            component:Home,
            children:[
                {
                    path:'son1',
                    component:Homeson1
                },
                {
                    path:'son2',
                    component:Homeson2
                }
            ]
        },
        {
            path:'/city/:usename/post/:id',
            component:City
        },
        {
            path:'/demo',
            component:checklist
        },
        {
            path: '/view',
            components: {
              default: Home,
              a: nameview1,
              b: nameview2
            }
          }
    ]
})