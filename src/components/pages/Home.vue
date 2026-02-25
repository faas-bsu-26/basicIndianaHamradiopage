<script setup>
    import { ref } from 'vue'
    import { store } from '../../store.js'
    var userName = ref("");
</script>

<template>
    <h1>Home</h1>
    <div>Count: {{ store.count }}  </div>
    <input v-model="userName" placeholder="Enter your name" />
    <p>Hello, {{ userName }}!</p>
</template>