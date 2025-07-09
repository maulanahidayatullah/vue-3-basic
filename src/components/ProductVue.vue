<script setup>

import {onWatcherCleanup, ref, watchEffect} from "vue";
import ProductDetail from "./ProductDetail.vue";

const productId = ref();
const product = ref(null)

// Kalau select dari productId berubah
// Maka product object akan terisi dari data json
// Yang ada di folder public

// Ibaratnya vue disuruh untuk melihat  v-model productId
// Kalau dia berubah maka selanjutnya dia bakal ngapain
// watch(productId, async (newValue, oldValue) => {
//   if (newValue) {
//     const response = await fetch(`/${newValue}.json`)
//     product.value = await response.json();
//   } else {
//     product.value = null;
//   }
// })
//
// console.log(productId.value);
// const response = await fetch(`/${productId.value}.json`)
// product.value = await response.json();
// watch kalau datanya langsung dapat
watchEffect(async () => {
  // onWatcherCleanUp contoh pemakaian kalau ketika pindah halaman
  // Kita bisa disconnect websocket
  onWatcherCleanup(() => {
    console.log("clean Up")
  })

  const response = await fetch(`/${productId.value}.json`)
  product.value = await response.json();
})

</script>

<template>
  <h1>Data Product</h1>
  <div v-if="product">
    <ProductDetail :id="product.id" :fullname="product.fullname" />
  </div>
  <label>
    Product ID:
    <select v-model="productId">
      <option value="product1">Product 1</option>
      <option value="product2">Product 2</option>
    </select>
  </label>
  <div v-if="product">
    <p>Id : {{ product.id }}</p>
    <p>Fullname : {{ product.fullname }}</p>
  </div>
</template>

<style scoped>
</style>