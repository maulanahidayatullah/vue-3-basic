<script setup>
import {ref} from "vue";
import ContactForm from "./ContactForm.vue";
import ContactList from "./ContactList.vue";

const data = ref([{
  name: "Hatsune Miku",
  age: 16,
  status: true,
  synth: "Inabakumori",
  message: "Yeyy"
}])

</script>

<template>
  <h1>Contact Form</h1>
    <ContactForm />
  <h1>Preview</h1>
  <table>
    <tbody>
      <ContactList v-model:name="data[0].name"
                   v-model:age="data[0].age"
                   v-model:status="data[0].status"
                   v-model:synth="data[0].synth"
                   v-model:message="data[0].message"
      />
    </tbody>
  </table>
</template>

<style scoped>
table, th, td {
  padding: 10px;
  border:1px solid black;
}
</style>