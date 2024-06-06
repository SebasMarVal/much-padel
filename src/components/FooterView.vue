<template>
    <footer class="footer-content">
      <div class="footer-container">
        <div class="footer-section">
          <h5>Contacto</h5>
          <p>muchpadel@tunegocio.com</p>
          <p>Teléfono: +34 123 456 789</p>
        </div>
        <div class="footer-section">
          <h5>Ubicación</h5>
          <p>Calle Falsa 123</p>
          <p>04004 Málaga, Andalucía, España</p>
        </div>
        <div class="footer-section">
          <h5>CIF Empresa</h5>
          <p>B12345678</p>
        </div>
        <div class="footer-section">
          <h5>Redes Sociales</h5>
          <div class="social-links">
        <a href="tu-enlace-facebook" class="social-link">
          <img src="@/assets/face.png" alt="Facebook" class="social-icon"> Facebook
        </a>
        <a href="tu-enlace-instagram" class="social-link">
          <img src="@/assets/Insta.png" alt="Instagram" class="social-icon"> Instagram
        </a>
      </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
      name: 'FooterView'
  }
  </script>
  
  <style scoped>
 .footer-content {
    background-color: #2489f5; /* Azul */
    color: white;
    padding: 4px;
    text-align: center;
}

.footer-container {
    display: flex;
    justify-content: space-around;
    margin: 0;
}

.footer-section {
    margin-bottom: 2px;
    flex-basis: 14%; /* Ajusta el ancho de cada columna */
}

.footer h4 {
    font-size: 1rem; /* Tamaño más pequeño para los h4 */
    margin-bottom: 5px;
}

.footer p, .footer a {
    font-size: 0.8rem; /* Tamaño más pequeño para el texto */
    margin: 2px 0;
   
}

  .footer a:hover {
      text-decoration: underline;
  }
  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.social-link {
    color: white;
    text-decoration: none;
    margin-bottom: 6px; /* Espacio entre enlaces */
}

.social-icon {
    width: 24px; /* o el tamaño que prefieras */
    height: auto;
    margin-left: 5px; /* Espacio entre el texto y el logotipo */
}
  </style>
  
  