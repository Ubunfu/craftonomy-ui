<template>
  <router-view />
</template>

<script setup>
import {useWindowWidthStore} from './store'
import {onUnmounted} from "vue";

const store = useWindowWidthStore()

window.addEventListener('resize', () => {
  store.setWindowWidth();
})

onUnmounted(() => window.removeEventListener('resize'))
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
