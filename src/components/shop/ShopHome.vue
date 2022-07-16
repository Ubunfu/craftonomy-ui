<template>
  <SiteHeader :isAuthenticated="isAuthenticated" :idToken="idToken"/>
  <div class="body-container">
    <NavBar/>
    <ItemTable/>
  </div>
  <p><a href="https://www.flaticon.com/free-icons/pickaxe" title="pickaxe icons">Pickaxe icons created by Us and Up - Flaticon</a></p>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import ItemTable from "@/components/shop/ItemTable";
import NavBar from "@/components/shop/NavBar";

export default {
  name: "ShopHome",
  components: {SiteHeader, ItemTable, NavBar},
  props: {
    isAuthenticated: Boolean,
    idToken: String
  }
}
</script>

<style scoped>

</style>