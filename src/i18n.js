// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        message: {
          title: 'Welcome !!',
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
