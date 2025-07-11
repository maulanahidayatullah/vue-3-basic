<script setup>
import {inject, ref} from "vue";

const profile = inject("profile");
</script>

<template>
  <h1>Profile Address : {{ profile.address }}</h1>
</template>

<style scoped>
</style>