<template>
  <div class="header">
    <div class="title">
      <router-link to="/" class="homeLink">Craftonomy Shop</router-link>
    </div>
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
  display: flex;
  margin-bottom: 50px;
}
.title {
  font-size: 4em;
  flex: auto;
  padding: 0 50px;
}
.homeLink {
  text-decoration: none;
  color: #2c3e50;
}
</style>