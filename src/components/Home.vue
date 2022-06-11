<template>
  <div class="home">
      <Header></Header>
      <ItemTable></ItemTable>
      <p><a href="https://www.flaticon.com/free-icons/pickaxe" title="pickaxe icons">Pickaxe icons created by Us and Up - Flaticon</a></p>
  </div>
</template>

<script>
import Header from './Header.vue';
import ItemTable from './ItemTable.vue';
export default {
    name: "Home",
    components: { Header, ItemTable }
}
</script>

<style>

</style>