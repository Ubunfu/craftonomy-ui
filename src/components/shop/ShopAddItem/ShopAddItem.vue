<template>
  <SiteHeader :isAuthenticated="isAuthenticated" :idToken="idToken" />

  <Footer />
</template>

<script>
import SiteHeader from "../../../components/SiteHeader.vue";
import Footer from "../../../components/Footer.vue";

export default {
  name: "ShopAddItem",
  components: {Footer, SiteHeader},
  props: {
    isAuthenticated: Boolean,
    idToken: String
  }
}
</script>

<style scoped>

</style>