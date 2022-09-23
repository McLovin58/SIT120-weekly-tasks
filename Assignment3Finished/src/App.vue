<script setup>
import Navbar from './components/MainPage/Navbar.vue';

/*
const routes = [
  {
    path:'/',
    name:'MainPage',
    component:MainPage
  },
  {
    path:'/help',
    name:'Help',
    component:HelpPage
  }
]

const router = createRouter({
  history:createWebHistory(process.env.BASE_URL),
  routes
})
*/
</script>
<template>
  <Navbar/>
<router-view/>
</template>




