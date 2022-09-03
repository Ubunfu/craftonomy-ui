<template>
  <div class="home">
    <SiteHeader :isAuthenticated="isAuthenticated" :idToken="idToken"/>
    <div class="body-container">
      <div class="tiles">
        <router-link to="/shop">
          <HomeTile title="Shop" description="Search or manage the Craftonomy Shop item catalog" image="shop.png"/>
        </router-link>
        <router-link to="/servers">
          <HomeTile title="Servers" description="View or manage game servers" image="server.png"/>
        </router-link>
        <router-link to="/bank">
          <HomeTile title="Bank" description="View Craftonomy wallet balances and transfer funds" image="wallet.png"/>
        </router-link>
        <router-link to="/xpvault">
          <HomeTile title="XP Vault" description="Deposit or withdraw points from the Craftonomy XP Vault" image="vault.png"/>
        </router-link>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import SiteHeader from '../components/SiteHeader.vue';
import HomeTile from "../components/HomeTile.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {Footer, HomeTile, SiteHeader},
  props: {
    isAuthenticated: Boolean,
    idToken: String
  }
}
</script>

<style>
.tiles {
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  grid-template-columns: auto auto;
  margin: auto;
  padding: 0 20px;
}
@media screen and (max-width: 600px) {
  .tiles {
    /* Knock it down to single-column on narrow screens */
    grid-template-columns: auto;
  }
}
@media screen and (min-width: 1000px) {
  .tiles {
    padding: 0 100px;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>