<template>
  <router-view />
</template>

<script>
import {useWindowWidthStore} from './store/index'

export default {
  name: 'App',
  setup() {
    const store = useWindowWidthStore()
    return {store}
  },
  created() {
    window.addEventListener('resize', () => {
      this.store.setWindowWidth();
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
