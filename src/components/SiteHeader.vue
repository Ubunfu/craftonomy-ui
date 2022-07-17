<template>
  <div class="header">
    <router-link to="/" class="homeLink">
      <img src="@/assets/craftonomy-75.png" alt="">
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