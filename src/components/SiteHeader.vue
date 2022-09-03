<template>
  <div class="header">
    <router-link to="/" class="homeLink">
      <picture>
        <source media="(max-width:650px)" srcset="../assets/header-small.png">
        <source media="(max-width:800px)" srcset="../assets/header-mid.png">
        <source media="(max-width:1000px)" srcset="../assets/header-large.png">
        <img src="../assets/header-extra.png" alt="">
      </picture>
    </router-link>
    <div class="auth-tile-wrapper">
      <AuthTile v-if="windowWidth > 500" :isAuthenticated="isAuthenticated" :idToken="idToken"/>
      <AuthTileDrawer v-else :isAuthenticated="isAuthenticated" :idToken="idToken"/>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import AuthTile from "@/components/AuthTile.vue";
import AuthTileDrawer from "@/components/AuthTileDrawer.vue";
import {useWindowWidthStore} from "../store";

const store = useWindowWidthStore();
const props = defineProps({
  isAuthenticated: Boolean,
  idToken: String
});

const windowWidth = computed(() => store.getWindowWidth)

defineExpose(props)

</script>

<style scoped>
.header {
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
}
@media screen and (max-width: 450px){
  .header {
    padding: 0 10px;
  }
}
.homeLink {
  text-decoration: none;
  color: #2c3e50;
  font-size: 4em;
}
</style>