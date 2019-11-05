<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "app",
  components: { Header }
};
</script>

<style>
html {
  font-size: 10px;
}

body {
  background: #e9e9e9;
  font-family: "Roboto", sans-serif;
  padding-top: 5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}
</style>
