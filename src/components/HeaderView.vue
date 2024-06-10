<template>
  <header class="header">
    <div class="header-title">much padel, tu tienda online</div>
    <img src="@/assets/image0.jpeg" alt="Logo" class="header-image" />
    <!-- Otros elementos del encabezado, como el título o el menú de navegación, pueden ir aquí -->
  </header>
  <div class="content">
    <img src="@/assets/logok.png" alt="Logo" class="header-image2" />
  </div>
</template>

<script>
export default {
  name: "HeaderView",
};
</script>

<style>
.header {
  height: 150px; /* Ajusta esto a la altura que desees para la cabecera */
  width: 100%; /* Esto hará que la cabecera ocupe todo el ancho de la página */
  position: relative;
}

.header-title {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: larger;
  font-weight: bold;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  color: white; /* Ajusta el color del texto para que sea visible sobre la imagen */
}

.header-image {
  width: 100%; /* Esto hará que la imagen ocupe todo el ancho de la cabecera */
  height: 90%; /* Esto hará que la imagen ocupe toda la altura de la cabecera */
  object-fit: cover; /* Esto asegurará que la imagen cubra completamente la cabecera */
}
.header-image2 {
  width: 25vw; /* Logo 20% del ancho de la ventana de visualización */
  height: auto;
  margin-bottom: 20px;
}
</style>
