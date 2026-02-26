<script setup>
import { store } from '../../store.js'
import Getlicensed from '../getlicensed.vue';

</script>

<template>
    <h1>What is Ham radio </h1>


    <h2>What can you do with Ham radio?</h2>
    <ul>
        <li v-for="book in store.books" :key="book.order">
            {{ book.title }}
        </li>
    </ul>

    <p>Ham radio is a hobby and service that allows people to communicate with each other over radio waves.
        and their are threee levels of ham radio license that you can get. The first level is the Technician license, which allows you to operate on VHF and UHF frequencies. The second level is the General license, which allows you to operate on HF frequencies. The third level is the Amateur Extra license, which allows you to operate on all frequencies and use all types of equipment. Ham radio operators can communicate with each other using voice, Morse code, and digital modes. They can also participate in contests, emergency communications, and public service events.
    </p>


    <Getlicensed/>


    <img src="/IndianaHamradiologo.png" alt="Indiana Ham radio logo" />
</template>