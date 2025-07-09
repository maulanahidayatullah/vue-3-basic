<script setup >
  const model = defineModel({
    required: false,
    default: {
      name: "Hatsune Miku",
      age: 16,
      status: true,
      synth: "Inabakumori",
      message: "asd"
    },
    type: Object,
  });
  // console.log(model)
</script>

<template>
<!--  <h1>Contact</h1>-->
  <form>
    <div class="form-group">
      <label for="name">Name :
        <input type="text" id="name" v-model="model.name" />
      </label>
    </div>
    <div class="form-group">
      <label for="age">Age :
        <input type="number" id="number" v-model="model.age" />
      </label>
    </div>
    <div class="form-group">
      <label for="status">Status :
        <input type="radio" value=false v-model="model.status">
        <label>False</label>
        <input type="radio" value=true v-model="model.status">
        <label>True</label>
      </label>
    </div>
    <div class="form-group">
      <label for="synth">Synth :
        <select id="synth" v-model="model.synth">
          <option value="Deco*27">Deco 27</option>
          <option value="Inabakumori">Inabakumori</option>
        </select>
      </label>
    </div>
    <div class="form-group">
      <label for="message">Message :
        <textarea id="message" v-model="model.message"></textarea>
      </label>
    </div>
  </form>

</template>

<style scoped>

</style>