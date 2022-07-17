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
    <p><a href="https://www.flaticon.com/free-icons/pickaxe" title="pickaxe icons">Pickaxe icons created by Us and Up - Flaticon</a></p>
    <p><a href="https://www.flaticon.com/free-icons/shop" title="shop icons">Shop icons created by Vectors Market - Flaticon</a></p>
    <p><a href="https://www.flaticon.com/free-icons/server" title="server icons">Server icons created by Roundicons - Flaticon</a></p>
    <p><a href="https://www.flaticon.com/free-icons/wallet" title="wallet icons">Wallet icons created by Nhor Phai - Flaticon</a></p>
    <p><a href="https://www.flaticon.com/free-icons/vault" title="vault icons">Vault icons created by Creative Stall Premium - Flaticon</a></p>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';
import HomeTile from "@/components/HomeTile";

export default {
  name: "Home",
  components: {HomeTile, SiteHeader},
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
}
@media screen and (min-width: 1000px) {
  .tiles {
    max-width: 50%;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>