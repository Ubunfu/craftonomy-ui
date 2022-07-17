<template>
  <SiteHeader :isAuthenticated="isAuthenticated" :idToken="idToken"/>
  <div class="body-container">
    <ShopNavBar v-if="isAuthenticated" />
    <ItemTable/>
  </div>
  <Footer />
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import ItemTable from "@/components/shop/ItemTable";
import ShopNavBar from "@/components/shop/ShopNavBar";
import Footer from "@/components/Footer";

export default {
  name: "ShopHome",
  components: {Footer, SiteHeader, ItemTable, ShopNavBar},
  props: {
    isAuthenticated: Boolean,
    idToken: String
  }
}
</script>

<style scoped>

</style>