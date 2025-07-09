<script setup>
import {ref} from "vue";

const hijau = ref(false);
const italic = ref(false);

const booleanWarna = ref(false);

const style1 = ref ({
  color: 'red',
})

const style2 = ref ({
  textTransform: "uppercase",
  fontWeight: "bold"
})

function toggleHijau() {
  hijau.value = !hijau.value;
}

function toggleItalic(){
  italic.value = !italic.value;
}

function gentiColor(){
  booleanWarna.value = !booleanWarna.value;
  if(booleanWarna.value){
    style1.value.color = 'yellow';
  } else {
    style1.value.color = 'green';
  }
}

</script>

<template>

  <h1 :class="{gentiWarna: hijau, gentiItalic: italic }">Style</h1>

  <h1 :style="[style1, style2]">Terbang</h1>

  <button v-on:click="toggleHijau">Toogle HIJAU</button>
  <button v-on:click="toggleItalic">Toogle Italic</button>


  <button v-on:click="gentiColor">Genti warna terbang</button>
</template>

<style scoped>
.gentiWarna {
  color: green;
}

.gentiItalic {
  text-transform: uppercase;
  font-weight: bold;
}
</style>