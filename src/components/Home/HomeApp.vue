<script setup>
import { ref } from "vue";
import Blog from "./Blog.vue";
import About from "./About.vue";


const score = ref(80);
const currentPage = ref('aboutPages')

const pages = {
  aboutPages : About,
  blogPages : Blog,
}

</script>

<template>
<!--  <h1>Score</h1>-->
  <button @click="currentPage = 'aboutPages'">About</button>
  <button @click="currentPage = 'blogPages'">Blog</button>

<!--  Mengubah component menjadi dinamic sesuai yang di klick-->
  <component :is="pages[currentPage]"></component>
</template>

<style scoped>
</style>