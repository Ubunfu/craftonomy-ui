<template>
  <div class="auth-drawer-toggle">
    <picture>
      <img src="@/assets/hamburger.png" alt="">
    </picture>
    <div class="drawer-content">
      <a v-if="!isAuthenticated" :href="idpLoginURL"><div class="drawer-item">LOG IN</div></a>
      <div v-if="isAuthenticated" class="drawer-item">👋 {{username}}</div>
      <div v-if="isAuthenticated" class="drawer-item logout" v-on:click="logOut()">LOG OUT</div>
    </div>
  </div>
</template>

<script>
import {decode} from "jsonwebtoken";

export default {
  name: "AuthDrawerToggle",
  props: {
    isAuthenticated: Boolean,
    idToken: String
  },
  data() {
    return {
      idpLoginURL: `${process.env.VUE_APP_IDP_LOGIN_URI}?response_type=code&client_id=${process.env.VUE_APP_IDP_CLIENT_ID}&redirect_uri=${process.env.VUE_APP_IDP_REDIRECT_URI}`,
    }
  },
  computed: {
    username() {
      return decode(this.idToken)['cognito:username']
    },
  },
  methods: {
    logOut() {
      this.$cookies.remove('authn')
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
picture img {
  max-width: 50px;
}
.auth-drawer-toggle {
  position: relative;
  display: inline-block;
}
.drawer-content {
  display: none;
  position: absolute;
  background-color: #555;
  color: cyan;
  z-index: 1;
  right: 0; /* anchors div to parent on right side */
  border-radius: 5px;
}
.drawer-item {
  display: block;
  padding: 7px;
  min-width: max-content;
}
.drawer-item:hover {
  background-color: #666;
  border-radius: 5px;
}
.auth-drawer-toggle:hover .drawer-content {
  display: block;
}
.logout {
  color: red;
}
</style>