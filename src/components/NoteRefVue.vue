<script setup >
import {onBeforeMount, onMounted, onUpdated, reactive, ref} from "vue";
import ListVue from "./ListVue.vue";
import CounterStateless from "./CounterStateless.vue";

const notesArray = reactive([]);
const noteObject = reactive({
  "id" : "",
  "fullname" : "",
})
// const idInput = useTemplateRef("idInput");


const idInput = ref<HTMLInputElement>(null); // ref untuk input ID

function addArrayNote(){
  // console.log(noteObject);
  if (noteObject.id === null || noteObject.id === ""){
    alert("nyeee")
    return;
  }
  if (noteObject.fullname === null || noteObject.fullname === ""){
    alert("nyoo")
    return;
  }

  notesArray.push({ ...noteObject });

  noteObject.id = "";
  noteObject.fullname = "";

  idInput.value.focus();
}

// Contoh Lifecycle
onBeforeMount(() => {
  console.log("Sebelum di render")
})

onMounted(() => {
  console.log("Setelah di render")
})

onUpdated(() => {
  console.log("Ketika ada render update an")
})

const counter = ref(0)

function addCounter(value) {
  counter.value += value
}
</script>

<template>
  <CounterStateless name="Shima Rin" :counter="counter" :increment="3"  @click="addCounter" />

<!--  <button @click="counter++">Coba Click </button>-->

  <ListVue nyoo="Miku" data-pertama="Hatsune Miku"/>
  <h1>Yeyy Note :v</h1>

  <div>
    <input ref="idInput" v-model="noteObject.id" placeholder="Masukan Id" autocomplete="off"><br>
    <input v-model="noteObject.fullname" placeholder="Masukan Fullname" autocomplete="off">
    <button @click="addArrayNote">Tambah Ke Array</button>
  </div>
  <br>
  <table class="table table-striped">
    <thead>
      <tr>
        <td>id</td>
        <td>Fullname</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in notesArray" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.fullname}}</td>
      </tr>
    </tbody>
  </table>

</template>

<style scoped>
table, th, td {
  padding: 10px;
  border:1px solid black;
}
</style>