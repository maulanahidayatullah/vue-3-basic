<script setup>
console.log("Hello Vue")

const apaBae = "yeyy";
const rawHTML = "<b><u>Hello Vue</u></b>";
const binding = "Ksabar";
const mobil = "motor";
const buttonDisabled = false;

const data = {
  ids : "ini_id",
  classw : "ini_class",
}

function apaFunction() {
  const a = 10;
  const b = 10;
  return a * b;
}

</script>

<template>
  <h2> {{ apaFunction() }}</h2>
  <h3>{{ binding.toUpperCase() }}</h3>
  <h1 :class="data.classw">{{ data.ids }}</h1>
  <button :disabled="buttonDisabled">Ini button</button>

  <h1 class="hello">{{ apaBae }}</h1>
  <h2><div v-html="rawHTML"></div></h2>

  <h1 :id="binding" :class="binding">asd</h1>
<!--  Nnti nama id nya bakal motor karena value dari variable mobil yakni motor-->
  <h1 :id="mobil">Yeyy</h1>

</template>

<style scoped>
.hello {
  color: green;
}
</style>