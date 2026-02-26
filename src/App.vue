<script setup>

import { onMounted } from 'vue'
import { store } from './store.js'
import Navbar from "./components/Navbar.vue"
import { useRoute } from "vue-router"
const route = useRoute()
onMounted(() => {
  store.fetchData();
});
</script>

<template>
  <h1>Welcome to Indiana Ham Radio.com </h1>
  <Navbar />
  <RouterView />

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
