<script setup>
import {inject, ref} from "vue";

const profile = inject("profile");
</script>

<template>
  <h1>Profile</h1>
  <p>Name : {{ profile.name }}</p>
  <p>Email : {{ profile.email }}</p>
</template>

<style scoped>
</style>