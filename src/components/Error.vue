<template>
  <SiteHeader />
  <h1 class="error">{{ error }}</h1>
  <p class="callToAction">{{ callToAction }}</p>
</template>

<script>
import SiteHeader from "../components/SiteHeader.vue";

export default {
  name: "Error",
  components: {SiteHeader},
  props: {
    error: String,
    callToAction: String
  }
}
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