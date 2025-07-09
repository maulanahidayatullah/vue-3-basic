<script setup >
const name = defineModel("name", {
  type: String,
})
const age = defineModel("age", {
  type: Number,
})
const status = defineModel("status", {
  type: Boolean,
})
const synth = defineModel("synth", {
  type: String,
})
const message = defineModel("message", {
  type: String,
})
</script>

<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ age }}</td>
    <td>{{ status }}</td>
    <td>{{ synth }}</td>
    <td>{{ message }}</td>
  </tr>


</template>

<style scoped>
table, th, td {
  padding: 10px;
  border:1px solid black;
}
</style>