import { createApp } from 'vue'
import App from './App.vue'
import basecss from '../src/base.css'
import allcss from '../src/allcss.css'
import {createRouter,createWebHistory} from 'vue-router'
import MainPage from './components/MainPage/MainPage.vue';
import HelpPage from './components/Help/HelpPage.vue'
import AboutPage from './components/AboutPage/AboutPage.vue'
import ContactPage from './components/ContactPage/ContactPage.vue'
import IndexPage from './components/IndexPage/IndexPage.vue'

/*The routing for the navigation bar, /game is a scrapped one */
const routes = [
  { path: '/', component: MainPage },
  { path: '/help', component: HelpPage },
  { path: '/about', component: AboutPage},
  { path: '/contact', component: ContactPage},
  { path: '/game', component: MainPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

createApp(App).use(router).mount('#app')