<template>
  <div v-if="!isAuthenticated" class="login-container">
    <a :href="idpLoginURL"><div class="login">LOG IN</div></a>
  </div>
  <div v-else class="login-container">
    <div class="profile">
      <div class="user">{{ username }}</div>
      <img src="@/assets/avatar-64.png" alt="">
    </div>
    <div class="logout" v-on:click="logOut()">LOG OUT</div>
  </div>
  <p>{{windowWidth}}</p>
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
    },
    windowWidth() {
      return this.$store.state.windowWidth;
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
  margin-right: 50px;
  float: right;
  clear: both;
}
.login-container a {
  color: cyan;
  text-decoration: none;
}
.login {
  padding: 5px 20px;
  background-color: #555;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 #555;
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
.profile {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.profile .user {
  padding-right: 10px;
}
</style>