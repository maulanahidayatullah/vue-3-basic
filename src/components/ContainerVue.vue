<script setup>
import Content from "./Content.vue";
import {useSlots} from "vue";

// Untuk mengambil ada slot atau tidak
const slots = useSlots();
</script>

<template>
<!--  Diambil dari component Content.vue
      Yang dimana nanti akan mengisi <slot/>
      Jadi nnti component nya bisa diisi dari parent
-->
  <Content title="title">
<!--    Klo ngga diisi nnti akan digantikan dengan default didalam <slot> dari component Content-->
<!--    <button>Maulana</button>-->
<!--    <button>Maulana</button>-->

    <template v-slot:header="attributes">
      <h1>Ini header yg udah ke isi :v. {{ attributes.counter }}</h1>
    </template>
    <template v-slot:default>
      <h1>Ini default yg udah ke isi :v</h1>
    </template>
    <template v-slot:footer>
      <h1>Ini footer yg udah ke isi :v</h1>
    </template>
  </Content>

<!--  Cba buat container landing page-->
</template>

<style scoped>
</style>