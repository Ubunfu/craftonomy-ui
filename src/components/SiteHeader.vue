<template>
  <div class="header">
    <router-link to="/" class="homeLink">
      <picture>
        <source media="(max-width:650px)" srcset="@/assets/header-small.png">
        <source media="(max-width:800px)" srcset="@/assets/header-mid.png">
        <source media="(max-width:1000px)" srcset="@/assets/header-large.png">
        <img src="@/assets/header-extra.png" alt="">
      </picture>
    </router-link>
    <AuthTile :isAuthenticated="isAuthenticated" :idToken="idToken"/>
  </div>
</template>

<script>
import AuthTile from "@/components/AuthTile";

export default {
  props: {
    isAuthenticated: Boolean,
    idToken: String
  },
  name: 'SiteHeader',
  components: {
    AuthTile
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 50px;
  text-align: center;
}
.homeLink {
  text-decoration: none;
  color: #2c3e50;
  font-size: 4em;
}
</style>