<template>
  <div v-if="!isAuthenticated" class="auth-tile">
    <a :href="idpLoginURL"><div class="button-login">LOG IN</div></a>
  </div>
  <div v-else class="auth-tile">
    <div class="profile">
      <div class="user">{{ username }}</div>
      <img src="../assets/avatar-64.png" alt="">
    </div>
    <div class="button-logout" v-on:click="logOut()">LOG OUT</div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  name: "AuthTile",
  props: {
    isAuthenticated: Boolean,
    idToken: String
  },
  data() {
    return {
      idpLoginURL: `${import.meta.env.VITE_IDP_LOGIN_URI}?response_type=code&client_id=${import.meta.env.VITE_IDP_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_IDP_REDIRECT_URI}`,
    }
  },
  computed: {
    username() {
      return jwtDecode(this.idToken)['cognito:username']
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
.auth-tile {
  max-width: fit-content;
}
.auth-tile a {
  color: cyan;
  text-decoration: none;
}
.button-login {
  padding: 5px 20px;
  background-color: #555;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 #555;
}
.button-logout {
  padding: 5px 20px;
  background-color: #aa0000;
  border-radius: 5px;
  color: white;
  max-width: fit-content;
  text-align: right;
  margin-left: auto;
  margin-right: 0;
}
.profile {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.profile .user {
  padding-right: 10px;
  font-weight: bold;
}
</style>