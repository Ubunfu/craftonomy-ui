<template>
  <div class="nav-container">
    <div class="nav-link">View Catalog</div>
    <div class="nav-link">Manage Catalog</div>
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
  flex-direction: column;
  margin-right: 50px;
  flex-grow: 1;
  max-width: 20%;
}
.nav-link {
  max-height: 35px;
  background-color: lightcyan;
  padding: 5px 20px;
  color: gray;
  flex: auto;
  border-radius: 5px;
  vertical-align: center;
  text-align: center;
  font-size: 25px;
  margin: 5px 0;
}
</style>