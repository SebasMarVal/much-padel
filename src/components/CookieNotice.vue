<template>
    <div class="cookie-notice">
      <p>Este sitio web utiliza cookies para garantizar una mejor experiencia de usuario. Al utilizar nuestro sitio web, aceptas nuestra política de cookies.</p>
      <button @click="acceptCookies">Aceptar cookies</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      acceptCookies() {
        // Aquí puedes agregar la lógica para guardar la aceptación de cookies del usuario (por ejemplo, en localStorage)
        localStorage.setItem('cookiesAccepted', true);
        // También puedes ocultar el aviso de cookies después de que el usuario acepte las cookies
        this.$emit('accept');
      }
    }
  }
  </script>
  
  <style scoped>
  .cookie-notice {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  </style>
  