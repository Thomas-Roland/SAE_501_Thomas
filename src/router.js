import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/home.vue'
import Conte from './pages/conte.vue'
import Conte1 from './pages/conte1.vue'
import Conte2 from './pages/conte2.vue'
import Conte3 from './pages/conte3.vue'
import Conte4 from './pages/conte4.vue'
import Conte5 from './pages/conte5.vue'
import Conte6 from './pages/conte6.vue'
import Conte7 from './pages/conte7.vue'
import Conte8 from './pages/conte8.vue'
import Conte9 from './pages/conte9.vue'
import Conte10 from './pages/conte10.vue'
import Conte11 from './pages/conte11.vue'
import Conte12 from './pages/conte12.vue'
import Conte13 from './pages/conte13.vue'
import Conte14 from './pages/conte14.vue'
import Conte15 from './pages/conte15.vue'
import Conte16 from './pages/conte16.vue'
import Conte17 from './pages/conte17.vue'
import Conte18 from './pages/conte18.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/conte', component: Conte },
  { path: '/conte1', component: Conte1 },
  { path: '/conte2', component: Conte2 },
  { path: '/conte3', component: Conte3 },
  { path: '/conte4', component: Conte4 },
  { path: '/conte5', component: Conte5 },
  { path: '/conte6', component: Conte6 },
  { path: '/conte7', component: Conte7 },
  { path: '/conte8', component: Conte8 },
  { path: '/conte9', component: Conte9 },
  { path: '/conte10', component: Conte10 },
  { path: '/conte11', component: Conte11 },
  { path: '/conte12', component: Conte12 },
  { path: '/conte13', component: Conte13 },
  { path: '/conte14', component: Conte14 },
  { path: '/conte15', component: Conte15 },
  { path: '/conte16', component: Conte16 },
  { path: '/conte17', component: Conte17 },
  { path: '/conte18', component: Conte18 },
]

const router = createRouter({
  history: createWebHashHistory(), // ✅ le mode hash règle le problème GitHub Pages
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
