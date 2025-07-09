<script setup>
import {nextTick, ref} from "vue";

  // let count = ref(0);

  // let data = ref ({
  //   angka: 0,
  //   nama: "Maulana"
  // })

  let data = ref([
    {
      angka: 0,
      nama: "Maulana"
    }
  ])

  async function increment() {
    // count.value = {
      // ...count.value,
    data.value[0].angka++
    data.value[0].nama = "Kasane Teto"

    await nextTick(); // Untuk menunggu render ulang

    // data.value[0].angka++
    // };
    // document.getElementById('count').innerText = `${count}`;
  }

  function gentiNama() {
    data.value[0].nama = "Hatsune Miku"
  }

</script>

<template>
  <div>
    <h1 >Ini Angka : {{data[0].angka}}</h1>
    <button v-on:click="increment">Tambah Lurr!</button>

    <h1>Ini Nama {{ data[0].nama }}</h1>
    <button v-on:click="gentiNama">Genti Lurr!</button>
  </div>
</template>

<style scoped>
</style>