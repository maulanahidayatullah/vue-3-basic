<script setup>

import {ref, useSlots} from "vue";

// Buat pengecekan ada slotnya apa ngga
const slots = useSlots();
const counter = ref(3);
</script>

<template>
<!--  <h1> {{ title.title }} </h1>-->
<!--  <div>-->
<!--&lt;!&ndash;    // Ketika didalam tag nnti akan mengisi slot ini&ndash;&gt;-->
<!--    <slot>-->
<!--      <h1> Default Content Klo ngga di isi :v</h1>-->
<!--    </slot>-->
<!--  </div>-->

<!--  Nyoba make slot yg banyak -->

  <div v-if="slots.header">
    <slot name="header" :counter="counter" >
<!--      <h1> Default Header</h1>-->
    </slot>
  </div>
  <div v-if="slots.default" >
    <!--    Biar klo ga dipanggil nnti akan make slot yg ini-->
    <slot name="default" :counter="counter">
      <h1> Default Content</h1>
    </slot>
  </div>
  <div v-if="slots.footer">
    <slot name="footer" :counter="counter">
      <h1> Default Footer</h1>
    </slot>
  </div>
</template>

<style scoped>
</style>