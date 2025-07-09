<script setup>
import {computed, ref} from "vue";

  let angka = ref(0);

  let data = ref({
    firstname: "",
    lastname: ""
  })

  let formData = ref({
    firstname: "",
    lastname: ""
  })

  function setNama() {
    data.value.firstname = formData.value.firstname;
    data.value.lastname = formData.value.lastname;
  }

  // pakai cara ini tidak boleh
// function fullName() {
//   return data.value.firstname + " " + data.value.lastname;
// }

// yang boleh
const fullName = computed(() => {
  return data.value.firstname + " " + data.value.lastname;
})

</script>

<template>
  <input type="checkbox" @change="angka++"/>
  <h1>Radio</h1>
  <button @click="angka++">{{ angka}}</button>

  <h1>FirstName : {{ data.firstname}}</h1>
  <h1>LastName : {{ data.lastname}}</h1>
  <h3>Fullname : {{ fullName }}</h3>

  <br><br>
  <input placeholder="first name" type="text" id="firstname" v-model="formData.firstname" @input="setNama" />
  <br><br>
  <input placeholder="last name" type="text" id="lastname" v-model="formData.lastname" @input="setNama" />
  <br><br>
  <button @click="setNama">Genti Lurr!</button>
</template>

<style scoped>

</style>