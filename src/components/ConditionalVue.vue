<script setup>
import { ref } from "vue";

const score = ref(80);

</script>

<template>
  <h1>Score</h1>
  <div v-if="score > 90">
    <p>Yeyy Score kamu = {{ score }}</p>
  </div>
  <div v-else-if="score > 70">
    <p>Mayan Score kamu = {{ score }}</p>
  </div>
  <div v-else>
    <p>Gblok Score kamu = {{ score }}</p>
  </div>
</template>

<style scoped>
</style>