<script setup>
const { counter, name } = defineProps({
  counter: Number,
  name: String,
  increment: Number,
});

const emits = defineEmits(["click"])

</script>

<template>
  <h1> Counter {{ name }} : {{ counter }}</h1>
  <button @click="emits('click', increment)">Increment {{ name }}</button>
</template>

<style scoped>

</style>