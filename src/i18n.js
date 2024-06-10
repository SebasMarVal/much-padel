// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      title: 'Welcome !!',
      aboutUsTitle: 'Who we are?',
      aboutUsText: `We are a group of friends passionate about sports and innovation. Our story began on a court, sharing laughs, effort, and above all, a passion for sports.
      We embarked on this adventure with the aim of combining comfort, functionality, and style. We looked for the best materials, those that would allow us to create a garment that was soft to the touch, absorbent, and durable.
      Today, we are proud to offer our t-shirts with towel-textured sleeves. They are the result of many hours of work, testing, and above all, the excitement of a group of friends who wanted to bring something new to the world of sports.
      We hope you enjoy our t-shirts as much as we enjoy creating them.`,
      carousel1Title: 'Discover our T-shirts',
      carousel1Text: 'With unique sleeves designed to absorb sweat and keep you comfortable in action. Perfect for your favorite sport!',
      carousel2Title: 'Elasticity and Comfort',
      carousel2Text: 'With unique sleeves designed to absorb sweat and keep you comfortable in action. Perfect for your favorite sport!',
      carousel3Title: 'Breathable Material',
      carousel3Text: 'With unique sleeves designed to absorb sweat and keep you comfortable in action. Perfect for your favorite sport!',
      register: 'Register',
      login: 'Login',
    }
  },
  es: {
    message: {
      title: '¡¡ Bienvenido !!',
      aboutUsTitle: '¿Quiénes somos?',
      aboutUsText: `Somos un grupo de amigos apasionados por el deporte y la innovación. Nuestra historia comenzó en una cancha, compartiendo risas, esfuerzo y, sobre todo, pasión por el deporte.
      Nos embarcamos en esta aventura con el objetivo de combinar comodidad, funcionalidad y estilo. Buscamos los mejores materiales, aquellos que nos permitieran crear una prenda de vestir que fuera suave al tacto, absorbente y duradera.
      Hoy, estamos orgullosos de ofrecer nuestras camisetas con mangas de textura toalla. Son el resultado de muchas horas de trabajo, pruebas y, sobre todo, la ilusión de un grupo de amigos que querían aportar algo nuevo al mundo del deporte.
      Esperamos que disfrutes de nuestras camisetas tanto como nosotros disfrutamos creándolas.`,
      carousel1Title: 'Descubre nuestras camisetas',
      carousel1Text: 'Con mangas únicas diseñadas para absorber el sudor y mantenerte cómodo en acción. ¡Perfectas para tu deporte favorito!',
      carousel2Title: 'Elasticidad y Confort',
      carousel2Text: 'Con mangas únicas diseñadas para absorber el sudor y mantenerte cómodo en acción. ¡Perfectas para tu deporte favorito!',
      carousel3Title: 'Material Transpirable',
      carousel3Text: 'Con mangas únicas diseñadas para absorber el sudor y mantenerte cómodo en acción. ¡Perfectas para tu deporte favorito!',
      register: 'Registrarse',
      login: 'Iniciar Sesión',
    }
  }
};

const i18n = createI18n({
  locale: 'es', // idioma por defecto
  fallbackLocale: 'en', // idioma de respaldo
  messages,
});

export default i18n;

