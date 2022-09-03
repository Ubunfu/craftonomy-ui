<template>
  <SiteHeader :is-authenticated="false"/>
  <div v-if="authorized" class="authzStatus">authorized!</div>
  <div v-else-if="authorizationError" class="authzStatus">authorization error!</div>
  <div v-else class="authzStatus">authorizing ...</div>
</template>

<script setup>
import {getToken} from "../services/securityService";
import {useRoute} from 'vue-router'
import SiteHeader from "../components/SiteHeader.vue";

let authorizationError, authorized = null

async function authorize() {
  const authResp = await getAccessToken()
  setAuthCookie(authResp)
  await $router.push({name: 'Home'})
}

async function getAccessToken() {
  try {
    const resp = await getToken(useRoute().query.code)
    authorized = true
    return resp
  } catch (e) {
    authorizationError = true
  }
}

function setAuthCookie(authResponse) {
  $cookies.set("authn", {
    idToken: authResponse.id_token,
    accessToken: authResponse.access_token,
    refreshToken: authResponse.refresh_token})
}

authorize()

</script>

<style scoped>
.authzStatus {
  text-align: center;
}
</style>