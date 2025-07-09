<script setup>

  const product = defineProps({
    id : {
      type: Number,
      required: true
    },
    fullname : {
      type: String,
      required: true,
      validator(value) {
        return value.trim().length !== 0
      }
    },
  })

</script>

<template>
  <h1>Data Product Detail</h1>
<!--  <label>-->
<!--    Product ID:-->
<!--    <select v-model="productId">-->
<!--      <option value="product1">Product 1</option>-->
<!--      <option value="product2">Product 2</option>-->
<!--    </select>-->
<!--  </label>-->
  <div>
    <p>Id : {{ product.id }}</p>
    <p>Fullname : {{ product.fullname }}</p>
  </div>
</template>

<style scoped>
</style>