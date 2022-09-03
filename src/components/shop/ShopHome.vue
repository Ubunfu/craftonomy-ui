<template>
  <SiteHeader :isAuthenticated="isAuthenticated" :idToken="idToken"/>
  <div class="body-container">
    <ShopNavBar v-if="isAuthenticated" />
    <ItemTable/>
  </div>
  <Footer />
</template>

<script setup>
import SiteHeader from '@/components/SiteHeader.vue';
import ItemTable from "@/components/shop/ItemTable.vue";
import ShopNavBar from "@/components/shop/ShopNavBar.vue";
import Footer from "@/components/Footer.vue";

const props = defineProps({
  isAuthenticated: Boolean,
  idToken: String
})

defineExpose(props)

</script>

<style scoped>

</style>