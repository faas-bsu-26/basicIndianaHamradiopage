<script setup>
import { store } from '../../store.js'

</script>

<template>
    <h1>Books</h1>
    <ul>
        <li v-for="book in store.books" :key="book.order">
            {{ book.title }} by {{ book.author }}
        </li>
    </ul>
</template>