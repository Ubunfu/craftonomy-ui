<template>
  <SiteHeader :isAuthenticated="isAuthenticated" :idToken="idToken" />

  <Footer />
</template>

<script setup>
import SiteHeader from "@/components/SiteHeader.vue";
import Footer from "@/components/Footer.vue";

const props = defineProps({
  isAuthenticated: Boolean,
  idToken: String
})

defineExpose(props)

</script>

<style scoped>

</style>