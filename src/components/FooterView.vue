<template>
  <CookieNotice v-if="!cookiesAccepted" @accept="cookiesAccepted = true" />
  <footer class="footer-content">
    <div class="container py-4">
      <div class="row text-center text-md-left">
        <div class="col-12 col-md-3 mb-3">
          <h5>Contacto</h5>
          <p>muchpadel@negocio.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>
        <div class="col-12 col-md-3 mb-3">
          <h5>Ubicación</h5>
          <p>Calle Falsa 123</p>
          <p>04004 Málaga, Andalucía, España</p>
        </div>
        <div class="col-12 col-md-3 mb-3">
          <h5>CIF Empresa</h5>
          <p>B12345678</p>
        </div>
        <div class="col-12 col-md-3 mb-3">
          <h5>Redes Sociales</h5>
          <div class="d-flex flex-column align-items-center">
            <a href="tu-enlace-facebook" class="social-link mb-2">
              <img src="@/assets/face.png" alt="Facebook" class="social-icon" />
              Facebook
            </a>
            <a href="tu-enlace-instagram" class="social-link">
              <img
                src="@/assets/Insta.png"
                alt="Instagram"
                class="social-icon"
              />
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p>By Sebastián Martínez Valdearcos</p>
    </div>
  </footer>
</template>

<script>
import CookieNotice from "./CookieNotice.vue";

export default {
  name: "FooterView",
  components: {
    CookieNotice,
  },
  data() {
    return {
      cookiesAccepted: localStorage.getItem("cookiesAccepted") === "true",
    };
  },
};
</script>

<style scoped>
.footer-content {
  background-color: #2489f5; /* Azul */
  color: white;
  text-align: center;
}

.social-link {
  color: white;
  text-decoration: none;
}

.social-icon {
  width: 24px; /* o el tamaño que prefieras */
  height: auto;
  margin-left: 5px; /* Espacio entre el texto y el logotipo */
}

.social-link:hover {
  text-decoration: underline;
}
</style>