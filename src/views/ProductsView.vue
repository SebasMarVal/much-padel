
<template>
  <div class="login-container">
    <h2 class="title">Productoss</h2>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="getImage(product.imagen)" :alt="product.nombre" class="product-image">
        <div>{{ product.nombre }}</div>
        <div>Precio: {{ product.precio }} €</div>
        <div>Stock: {{ product.stock }}</div>
        <button @click="buyProduct(product)" class="btn btn-primary">
        <i class="bi bi-cart-fill"></i> Buy
        </button>
      </div>
    </div>
    <button @click="goToHome" class="btn btn-primary">Home</button>
    <button @click="logout" class="btn btn-secondary">Cerrar Sesión</button>
  </div>
</template>


<script>
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  name: 'AdminView',
  data() {
    return {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      image: '',
      products: [],
      isAdmin: false
    };
  },
  created() {
    this.checkAdminRole();
    this.fetchProducts();
  },
  methods: {
    checkAdminRole() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.isAdmin = user && user.roles_id === 1;
      if (!this.isAdmin) {
        console.log('Esta llegando');
        this.$router.push({ name: 'products' });
      }
    },
    fetchProducts() {
      axios.get('http://localhost/mi_proyecto/get_products.php')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    buyProduct(product) {
      const talla = prompt("Ingrese la talla que desea comprar (S, M, L, XL):");
      if (!['S', 'M', 'L', 'XL'].includes(talla.toUpperCase())) {
        alert("Debe ingresar una talla válida (S, M, L, XL).");
        return;
      }
      if (product.stock <= 0) {
        alert("No hay suficiente stock disponible.");
        return;
      }
      // Enviar el correo electrónico
      this.sendPurchaseEmail(product, talla);
      // Resta el stock
      this.updateStock(product.id, product.stock - 1);
    },
    sendPurchaseEmail(product, talla) {
    axios.post('http://localhost/mi_proyecto/send_email.php', {
    product: product,
    talla: talla,
    email: '1595287@iesplayamar.es' // Reemplazar con el correo electrónico del destinatario
  })
  .then(() => {
    alert("Se ha enviado un correo con los detalles de su compra.");
  })
  .catch(error => {
    console.error(error);
  });
},
    updateStock(id, newStock) {
   // Aseguro de que newStock sea un número
    newStock = Number(newStock);
    console.log(`Updating stock for product ${id} to ${newStock}`);
    axios.post('http://localhost/mi_proyecto/update_stock.php', {
      id: id,
      stock: newStock
    })
    .then(() => {
      // Espera a que se complete la actualización del stock antes de volver a buscar los productos
      return this.fetchProducts();
    })
    .catch(error => {
      console.error(error);
    });
},
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    getImage(imageName) {
        if (!imageName) {
            return require('@/assets/bola3.avif'); // Imagen por defecto
        }
        return require(`@/assets/${imageName}`);
    },
    resetForm() {
      this.name = '';
      this.description = '';
      this.price = 0;
      this.stock = 0;
      this.image = '';
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push({ name: 'home' });
    }
  }
};
</script>

<style scoped>
.title {
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: #2489f5; /* Azul */
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  width: calc(33.33% - 10px); /* Ajusta esto según el espacio que quieras entre las columnas */
  margin-bottom: 20px;
}

.product-image {
  width: 90%;
  height: auto;
  object-fit: cover;
}
.login-container {
  /* ... tus otros estilos ... */
  padding-bottom: 20px; /* Esto añade espacio en la parte inferior */
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
</style>
