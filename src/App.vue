<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style>
@import "@/assets/css/home.css";

* {
  font-family: 'Varela Round', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold !important;
  ;
}
</style>