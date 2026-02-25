<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
import { store } from './store.js'
import { on } from '@primeuix/themes/aura/floatlabel';

onMounted(() => {
  store.fetchData();
});
</script>

<template>
  <nav>
    <button><RouterLink to="/">Home</RouterLink></button>
    <button><RouterLink to="/about">About</RouterLink></button>
    <button><RouterLink to="/hello">Test new route</RouterLink></button>
  </nav>
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
