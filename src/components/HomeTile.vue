<template>
  <div class="tile">
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
    <img :src="imagePath" alt="">
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  title: String,
  description: String,
  image: String
})

const imagePath = computed(() => "../src/assets/" + props.image)

defineExpose(props)

</script>

<style scoped>
.tile {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 15px;
  text-align: center;
}

.tile:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.39);
}

.tile > .title {
  font-size: 26px;
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
  margin-bottom: 5px;
}

.tile > .description {
  margin: 10px auto;
}

.tile > img {
  max-width: 150px;
  margin: 10px auto;
}
</style>