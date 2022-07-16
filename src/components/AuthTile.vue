<template>
  <div v-if="!isAuthenticated" class="login-container">
    <a :href="idpLoginURL"><div class="login">LOG IN</div></a>
  </div>
  <div v-else class="login-container">
    <div class="profile"> Welcome, {{ username }}</div>
    <div class="logout" v-on:click="logOut()">LOG OUT</div>
  </div>
</template>

<script>
import {decode} from 'jsonwebtoken'

export default {
  name: "AuthTile",
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
    }
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
.login-container {
  padding: 0 50px;
}
.login-container a {
  color: gray;
  text-decoration: none;
}
.login {
  padding: 5px 20px;
  background-color: cyan;
  border-radius: 5px;
}
.logout {
  padding: 5px 20px;
  background-color: #aa0000;
  border-radius: 5px;
  color: white;
  max-width: fit-content;
  text-align: right;
  margin-left: auto;
  margin-right: 0;
}
</style>