<script setup>
import { ref } from 'vue'
import Card from "primevue/card"

import About from "./pages/About.vue"
import Home from "./pages/Home.vue" 


var currentPage = ref("home")

const pages = {
  "about": About,
  "home": Home
}

const count = ref(0)

function setPage(page) {
  currentPage.value = page
}
</script>

<template>

  <component :is="pages[currentPage]" />

  <nav>
    <button 
      v-for="page in Object.keys(pages)" 
      :key="page" @click="setPage(page)"
      :class="{ selected: currentPage === page}">
        {{ page }}
      </button>

  </nav>

  <button @click="count++">Count: {{ count }}</button>
    <button @click="count--">Reduce</button>

  <Transition name="fade">
    <Card v-if="count > 2">
      <template #content>
        <h2>Here</h2>
      </template>
    </Card>
  </Transition>

</template>

<style scoped>



</style>
