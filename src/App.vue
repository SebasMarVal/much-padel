<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <HeaderView />

    <div
      class="content flex-grow-1 d-flex align-items-center justify-content-center"
    >
      <router-view></router-view>
    </div>

    <FooterView />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  components: {
    HeaderView,
    FooterView,
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style>
#app {
  background-color: ffffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

nav {
  background-color: hwb(207 38% 1%);
  color: white;
  padding: 10px;
}
</style>
