<template>
  <div class="page">
    
    <h2>{{ $t('message.title') }}</h2>
    <div class="language-switcher">
      <button @click="changeLanguage('en')" class="btn btn-language">English</button>
      <button @click="changeLanguage('es')" class="btn btn-language">Español</button>
    </div>
    <!-- carrusel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-content">
              <div class="carousel-text">
                <h2>{{ $t('message.carousel1Title') }}</h2>
                <p>{{ $t('message.carousel1Text') }}</p>
              </div>
              <img class="d-block w-50 img-hover" src="@/assets/textura3.jpeg" alt="First slide">
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-content">
              <div class="carousel-text">
                <h2>{{ $t('message.carousel2Title') }}</h2>
                <p>{{ $t('message.carousel2Text') }}</p>
              </div>
              <img class="d-block w-50 img-hover" src="@/assets/textura2.jpeg" alt="Second slide">
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-content">
              <div class="carousel-text">
                <h2>{{ $t('message.carousel3Title') }}</h2>
                <p>{{ $t('message.carousel3Text') }}</p>
              </div>
              <img class="d-block w-50 img-hover" src="@/assets/textura.jpeg" alt="Third slide">
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- Fin del carrusel de Bootstrap -->
      <p class="about-us">
       <strong>Quiees somos ?</strong> 
  <br><br>
  Somos un grupo de amigos apasionados por el deporte y la innovación. <br>
  Nuestra historia comenzó en una cancha, compartiendo risas, esfuerzo y, sobre todo, pasión por el deporte.
  Nos embarcamos en esta aventura con el objetivo de combinar comodidad, funcionalidad y estilo. Buscamos los mejores materiales, aquellos que nos permitieran crear una prenda de vestir que fuera suave al tacto, absorbente y duradera.
  Hoy, estamos orgullosos de ofrecer nuestras camisetas con mangas de textura toalla. Son el resultado de muchas horas de trabajo, pruebas y, sobre todo, la ilusión de un grupo de amigos que querían aportar algo nuevo al mundo del deporte.
  Esperamos que disfrutes de nuestras camisetas tanto como nosotros disfrutamos creándolas.
</p>

      <img class="d-block w-50 center-frame" src="@/assets/salto.jpg" alt="imagen">
      <div class="buttons">
        <button @click="goToRegister" class="btn btn-primary">{{ $t('message.register') }}</button>
        <button @click="goToLogin" class="btn btn-secondary">{{ $t('message.login') }}</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MiComponente',
  methods: {
    goToRegister() {
      this.$router.push({ name: 'register' });
    },
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.carousel-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 20px;
}

.carousel-text {
  flex: 1;
  padding-right: 20px;
}

.carousel-text h2 {
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.8); /* Fondo semitransparente para mejorar la legibilidad */
  margin: 10px; /* Espacio alrededor del texto */
  border-radius: 5px; /* Bordes redondeados para el fondo del texto */
  padding: 10px; /* Relleno para el texto */
}

.carousel-text p {
  font-size: 1.25rem;
  background: rgba(255, 255, 255, 0.8); /* Fondo semitransparente para mejorar la legibilidad */
  margin: 10px; /* Espacio alrededor del texto */
  border-radius: 5px; /* Bordes redondeados para el fondo del texto */
  padding: 10px; /* Relleno para el texto */
}

.carousel-inner .carousel-item img {
  flex: 1;
  height: auto;
  object-fit: cover;
  width: 50%; /* Ajustar el ancho al 50% */
  height: auto; /* Mantener la proporción de la imagen */
}
.buttons {
  margin-top: 50px;
  margin-bottom: 50px; /* Espacio entre la imagen y los botones */
}
.btn-primary {
  margin-right: 10px; /* Añade algo de espacio */
  background: linear-gradient(to right, #007bff, rgb(189, 199, 214));
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}
.btn-primary:hover {
  transform: scale(1.05);
  background: linear-gradient(to right, #1b76d8, white);
}

.btn-secondary {
  background: linear-gradient(to right, #6c757d, rgb(172, 172, 172));
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-secondary:hover {
  transform: scale(1.05);
  background: linear-gradient(to right, #5a6268, white);
}
.img-hover {
  transition: transform 0.2s; /* Animación */
}
.img-hover:hover {
  transform: scale(1.5); /* Amplía la imagen 1.5 veces */
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
.center-frame {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border: 5px solid #6e6d6d;
}
.about-us {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: justify;
  background-color: #ade9c7; /* Este es un color azul claro */
  padding: 20px; /* Añade algo de espacio alrededor del texto */
}
</style>


  