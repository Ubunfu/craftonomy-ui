<template>
  <SiteHeader :is-authenticated="false"/>
  <div v-if="authorized" class="authzStatus">authorized!</div>
  <div v-else-if="authorizationError" class="authzStatus">authorization error!</div>
  <div v-else class="authzStatus">authorizing ...</div>
</template>

<script>
import {getToken} from "@/services/securityService";
import {useRoute} from 'vue-router'
import SiteHeader from "@/components/SiteHeader";

export default {
  name: "Authorize",
  components: {SiteHeader},

  data() {
    return {
      idToken: null,
      accessToken: null,
      refreshToken: null,
      authorizationError: false,
      authorized: false
    }
  },
  async created() {
    const authResp = await this.getAccessToken()
    this.setAuthCookie(authResp)
    this.$router.push(`/`)
  },
  methods: {
    async getAccessToken() {
      try {
        const resp = await getToken(useRoute().query.code)
        this.authorized = true
        return resp
      } catch (e) {
        this.authorizationError = true
      }
    },
    setAuthCookie(authResponse) {
      this.$cookies.set("authn", {
        idToken: authResponse.id_token,
        accessToken: authResponse.access_token,
        refreshToken: authResponse.refresh_token})
    }
  }
}
</script>

<style scoped>
.authzStatus {
  text-align: center;
}
</style>