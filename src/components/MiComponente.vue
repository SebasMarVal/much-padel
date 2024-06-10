<template>
  <div class="page container">
    <h2>{{ $t("message.title") }}</h2>

    <div class="language-switcher mb-3">
      <button @click="changeLanguage('en')" class="btn btn-light btn-sm mx-1">
        English
      </button>
      <button @click="changeLanguage('es')" class="btn btn-light btn-sm mx-1">
        Español
      </button>
    </div>

    <!-- Quiénes somos -->
    <p class="about-us text-justify bg-green p-3 mb-4">
      <strong>{{ $t("message.aboutUsTitle") }}</strong
      ><br /><br />
      {{ $t("message.aboutUsText") }}
    </p>

    <!-- Carrusel -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="carousel-content d-flex align-items-center justify-content-center"
          >
            <div class="carousel-text text-start ms-3">
              <h2>{{ $t("message.carousel1Title") }}</h2>
              <p>{{ $t("message.carousel1Text") }}</p>
            </div>
            <img
              class="d-block w-50 img-hover"
              src="@/assets/textura3.jpeg"
              alt="First slide"
            />
          </div>
        </div>

        <div class="carousel-item">
          <div
            class="carousel-content d-flex align-items-center justify-content-center"
          >
            <div class="carousel-text text-start ms-3">
              <h2>{{ $t("message.carousel2Title") }}</h2>
              <p>{{ $t("message.carousel2Text") }}</p>
            </div>
            <img
              class="d-block w-50 img-hover"
              src="@/assets/textura2.jpeg"
              alt="Second slide"
            />
          </div>
        </div>

        <div class="carousel-item">
          <div
            class="carousel-content d-flex align-items-center justify-content-center"
          >
            <div class="carousel-text text-start ms-3">
              <h2>{{ $t("message.carousel3Title") }}</h2>
              <p>{{ $t("message.carousel3Text") }}</p>
            </div>
            <img
              class="d-block w-50 img-hover"
              src="@/assets/textura.jpeg"
              alt="Third slide"
            />
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- Fin del carrusel -->

    <img
      class="d-block mx-auto w-50 border border-secondary"
      src="@/assets/salto.jpg"
      alt="imagen"
    />

    <div class="buttons my-4">
      <button @click="goToRegister" class="btn btn-primary mx-2">
        {{ $t("message.register") }}
      </button>
      <button @click="goToLogin" class="btn btn-secondary mx-2">
        {{ $t("message.login") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  methods: {
    goToRegister() {
      this.$router.push({ name: "register" });
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.carousel-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  padding: 20px;
}

.carousel-text {
  max-width: 50%;
  margin-left: 0; /* Eliminamos el margen izquierdo */
}

.img-hover {
  transition: transform 0.2s;
}

.img-hover:hover {
  transform: scale(1.6);
}

.language-switcher {
  text-align: center;
  margin-top: 10px;
}

.language-switcher .btn-language {
  background-color: lightgray;
  color: black;
  margin: 5px;
  padding: 5px 10px;
  font-size: 0.8rem;
}

.about-us {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: justify;
  background-color: #ade9c7;
  padding: 20px;
}

.bg-green {
  background-color: #ade9c7;
}
</style>
