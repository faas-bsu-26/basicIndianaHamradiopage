<script setup>
import { store } from '../../store.js'
</script>

<template>
    <h1>About</h1>
    <div>Count: {{ store.count }}  </div>
    <button @click="store.countUp()">More score and seven years ago</button>
</template>