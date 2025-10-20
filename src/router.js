import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Conte from './pages/Conte.vue'
import Conte1 from './pages/Conte1.vue'
import Conte2 from './pages/Conte2.vue'
import Conte3 from './pages/Conte3.vue'
import Conte4 from './pages/Conte4.vue'
import Conte5 from './pages/Conte5.vue'
import Conte6 from './pages/Conte6.vue'
import Conte7 from './pages/Conte7.vue'
import Conte8 from './pages/Conte8.vue'
import Conte9 from './pages/Conte9.vue'
import Conte10 from './pages/Conte10.vue'
import Conte11 from './pages/Conte11.vue'
import Conte12 from './pages/Conte12.vue'
import Conte13 from './pages/Conte13.vue'
import Conte14 from './pages/Conte14.vue'
import Conte15 from './pages/Conte15.vue'
import Conte16 from './pages/Conte16.vue'
import Conte17 from './pages/Conte17.vue'
import Conte18 from './pages/Conte18.vue'









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
  history: createWebHistory(),
  routes,
})

export default router
