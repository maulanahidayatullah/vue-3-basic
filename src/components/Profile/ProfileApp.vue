<script setup>

import {provide, reactive} from "vue";
import Profile from "./Profile.vue";
import ProfileAddress from "./ProfileAddress.vue";

const profile = reactive({
  name: "Lana",
  email: "lans@mail.com",
  address: "Indramayu",
} );

// Menginisiasi varbale global
provide("profile", profile);
</script>

<template>
  <input v-model="profile.name" type="text" />
  <Profile />
  <ProfileAddress profile={profile} />
</template>

<style scoped>
</style>