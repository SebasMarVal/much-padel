<template>
  <div class="register-container">
    <h2>Registro</h2>
    <form @submit.prevent="register" class="register-form">
      <div class="form-field">
        <label for="nombre">Nombre Completo:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div class="form-field">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-field">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Registrarse</button>
        <button @click="goToHome" class="btn btn-secondary">Home</button>
      </div>
    </form>
  </div>
</template>
  
  <script>
  /* eslint-disable */ 
  import axios from 'axios';
  export default {
    name: 'RegisterView',
  data() {
    return {
      nombre: '',
      email: '',
      password: ''
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    register() {
  // Validación de datos 
  if (!this.email.includes('@')) {
    alert('Por favor, introduce un email válido.');
    return;
  }
  if (this.password.length < 4) {
    alert('La contraseña debe tener al menos 4 caracteres.');
    return;
  }

  // Desactivar el botón de registro y mostrar spinner (no mostrado aquí)
  this.isRegistering = true;

  const userData = {
    nombre: this.nombre,
    email: this.email,
    password: this.password
  };

  this.$http.post('register.php', userData)
    .then(response => {
      // Reactivar el botón de registro y ocultar spinner
      this.isRegistering = false;

      if (response.data.success) {
        alert('Registro exitoso');
        this.$router.push('/login');
      } else {
        alert('Error en el registro: ' + response.data.error);
      }
    })
    .catch(error => {
      // Reactivar el botón de registro y ocultar spinner
      this.isRegistering = false;
      alert('Ha ocurrido un error durante el registro. Por favor, inténtalo de nuevo.');
      console.error('Error:', error);
    });
    }
  }
};
  </script>
<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f3f3f3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.register-form {
  display: flex;
  flex-direction: column;
}

.form-field {
  margin-bottom: 15px;
}

.form-field label {
  display: block;
  margin-bottom: 5px;
}

.form-field input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}
</style>