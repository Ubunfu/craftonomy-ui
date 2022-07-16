<template>
  <div class="home">
    <SiteHeader :isAuthenticated="isAuthenticated" :idToken="idToken"/>
    <div class="body-container">
      <ItemTable/>
      <NavBar/>
    </div>
    <p><a href="https://www.flaticon.com/free-icons/pickaxe" title="pickaxe icons">Pickaxe icons created by Us and Up - Flaticon</a></p>
  </div>
</template>

<script>
import SiteHeader from './SiteHeader.vue';
import ItemTable from './ItemTable.vue';
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: {NavBar, SiteHeader, ItemTable },
  props: {
    isAuthenticated: Boolean,
    idToken: String
  }
}
</script>

<style>
.body-container {
  display: flex;
  flex-direction: row;
}
</style>