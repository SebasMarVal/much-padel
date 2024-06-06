<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Inicio</button>
        <button @click="goToHome" class="btn btn-secondary">Home</button>
      </div>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    async login() {
      try {
        const response = await axios.post('http://localhost/mi_proyecto/login.php', {
          email: this.email,
          password: this.password
        });

        console.log('Respuesta del servidor:', response);

        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          this.message = response.data.message;

          setTimeout(() => {
            const user = response.data.user;
            console.log('Usuario autenticado:', user);
            if (user.roles_id === 1) {
              this.$router.push({ name: 'admin' });
            } else {
              this.$router.push({ name: 'products' });
            }
          }, 1000);
        } else {
          this.message = response.data.error;
        }
      } catch (error) {
        this.message = 'Error en el inicio de sesión: ' + error.message;
      }
    }
  }
};
</script>
<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f3f3f3;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
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

.message {
  margin-top: 20px;
  color: red;
}
</style>


  