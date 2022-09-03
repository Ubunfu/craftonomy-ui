<template>
  <SiteHeader />
  <h1 class="error">{{ error }}</h1>
  <p class="callToAction">{{ callToAction }}</p>
</template>

<script setup>
import SiteHeader from "@/components/SiteHeader.vue";

const props = defineProps({
  error: String,
  callToAction: String
})

defineExpose(props)

</script>

<style scoped>
.error {
  color: red;
  text-align: center;
}
.callToAction {
  text-align: center;
}
</style>