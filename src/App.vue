<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  created() {
    window.addEventListener('resize', () => {
      this.$store.commit('setWindowWidth');
    })
  },
  unmounted() {
    // stops memory leaks?
    window.removeEventListener('resize');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
