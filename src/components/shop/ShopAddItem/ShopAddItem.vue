<template>
  <SiteHeader :isAuthenticated="isAuthenticated" :idToken="idToken" />

  <Footer />
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

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