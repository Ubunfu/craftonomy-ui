<template>
  <div class="nav-container">
    <router-link to="/shop/addItem">
      <div class="nav-link">Add Item</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-container {
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 0 auto;
}
.nav-link {
  max-height: 35px;
  max-width: 300px;
  background-color: lightcyan;
  padding: 5px 20px;
  color: gray;
  flex: auto;
  border-radius: 5px;
  vertical-align: center;
  text-align: center;
  font-size: 25px;
  margin: 0 10px;
}
.nav-link:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 150, 150, 0.2), 0 6px 20px 0 rgba(0, 150, 150, 0.19);
}
</style>