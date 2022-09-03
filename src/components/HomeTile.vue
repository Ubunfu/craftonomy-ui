<template>
  <div class="tile">
    <div class="title">{{ title }}</div>
    <div class="description">{{ description }}</div>
    <img :src="imagePath" alt="">
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String
})

// Binding template <img> paths to normal string consts doesn't work
// this workaround enables dynamic resolution, and doesn't break cache-busting
const imagePath = new URL(`../assets/${props.image}`, import.meta.url).href;

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