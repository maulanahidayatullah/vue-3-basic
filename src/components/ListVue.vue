<script setup>

  const props = defineProps(["nyoo", "dataPertama"]);

  const data = [
    {
      "id": "1",
      "fullname": props.dataPertama,
    },
    {
      "id": "2",
      "fullname": "Kasane Teto"
    },
    {
      "id": "3",
      "fullname": "Kagamine Rin"
    }
  ]

</script>

<template>
  <h2>Halo {{ props.nyoo }}</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <td>id</td>
        <td>Fullname</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.fullname}}</td>
      </tr>
<!--      <tr v-for="item in data" :key="item.id">-->
<!--        <td v-for="(value,key) in item">-->
<!--          {{ value }}-->
<!--        </td>-->
<!--      </tr>-->
    </tbody>
  </table>
</template>

<style scoped>
table, th, td {
  padding: 10px;
  border:1px solid black;
}
</style>