import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './../components/HomePage.vue'
import Favoris from './../components/Favoris.vue'
import Single from './../components/Single.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HomePage },
      { path: '/favoris', component: Favoris },
      { path: '/:id', component: Single },
      
    ]
})