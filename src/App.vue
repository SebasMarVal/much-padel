<template>
  <div id="app">
    <HeaderView />

    <div class="content">
      <router-view></router-view>
    </div>
    <FooterView/>

  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import HeaderView from './components/HeaderView.vue';
import FooterView from './components/FooterView.vue';

export default {
  components: {
    HeaderView,
    FooterView,
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style>
#app {
  background-color: ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  background-color: hwb(207 38% 1%);
  color: white;
  padding: 10px;
}
</style>
