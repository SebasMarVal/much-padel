<template>
  <div v-if="isAdmin" class="admin-container">
    <h2 class="title">Administrar Productos</h2>

    <form @submit.prevent="addProduct" class="product-form row">
      <div class="col-md-6 form-group">
        <label for="productName">Nombre del Producto</label>
        <input
          type="text"
          id="productName"
          v-model="name"
          class="form-control"
          placeholder="Introduce el nombre del producto"
          required
        />
      </div>
      <div class="col-md-6 form-group">
        <label for="productDescription">Descripción</label>
        <textarea
          id="productDescription"
          v-model="description"
          class="form-control"
          placeholder="Introduce una descripción"
          required
        ></textarea>
      </div>
      <div class="col-md-6 form-group">
        <label for="productPrice">Precio</label>
        <input
          type="number"
          id="productPrice"
          v-model="price"
          class="form-control"
          placeholder="Introduce el precio"
          required
        />
      </div>
      <div class="col-md-6 form-group">
        <label for="productStock">Stock</label>
        <input
          type="number"
          id="productStock"
          v-model="stock"
          class="form-control"
          placeholder="Introduce el stock"
          required
        />
      </div>
      <div class="col-12 form-group">
        <label for="productImage">Imagen</label>
        <input
          type="text"
          id="productImage"
          v-model="image"
          class="form-control"
          placeholder="Introduce el nombre de la imagen"
        />
      </div>
      <div class="col-12 my-3">
        <button
          type="submit"
          class="btn btn-primary"
          style="background: linear-gradient(to right, #007bff, #00a5ff)"
        >
          Añadir Producto
        </button>
      </div>
    </form>

    <h3>Lista de Productos</h3>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img
          :src="getImage(product.imagen)"
          :alt="product.nombre"
          class="product-image"
        />
        <div>{{ product.nombre }}</div>
        <div>Precio: {{ product.precio }} €</div>
        <div>Stock: {{ product.stock }}</div>
        <div
          class="button-group"
          style="display: flex; gap: 10px; justify-content: center"
        >
          <button
            @click="updateStock(product.id, parseInt(product.stock) + 1)"
            class="btn btn-primary"
            style="
              background: linear-gradient(to right, #007bff, #00a5ff);
              border: none;
            "
          >
            <i class="bi bi-plus-circle-fill"></i>
          </button>
          <button
            @click="updateStock(product.id, parseInt(product.stock) - 1)"
            :disabled="product.stock === 0"
            class="btn btn-success"
            style="
              background: linear-gradient(to right, #28a745, #218838);
              border: none;
            "
          >
            <i class="bi bi-dash-circle-fill"></i>
          </button>
          <button
            @click="deleteProduct(product.id)"
            class="btn btn-danger"
            style="
              background: linear-gradient(to right, #dc3545, #c82333);
              border: none;
            "
          >
            <i class="bi bi-trash-fill"></i> Eliminar
          </button>
        </div>
      </div>
    </div>
    <button @click="logout" class="cerrar-sesion">Cerrar Sesión</button>
  </div>
  <div v-else>
    <p>No tienes permiso para ver esta página.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminView",
  data() {
    return {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      image: "",
      products: [],
      isAdmin: false,
    };
  },
  created() {
    this.checkAdminRole();
    this.fetchProducts();
  },
  methods: {
    checkAdminRole() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.isAdmin = user.roles_id === 1;
      }
      if (!this.isAdmin) {
        this.$router.push({ name: "products" });
      }
    },
    fetchProducts() {
      axios
        .get("http://localhost/mi_proyecto/get_products.php")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addProduct() {
      // Si no se proporciona ninguna imagen, asigna la imagen por defecto
      if (!this.image) {
        // Asignar la imagen por defecto
        this.image = "bola3.avif";
      }
      axios
        .post("http://localhost/mi_proyecto/add_product.php", {
          nombre: this.name,
          descripcion: this.description,
          precio: this.price,
          stock: this.stock,
          imagen: this.image,
        })
        .then(() => {
          this.fetchProducts();
          this.resetForm();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateStock(id, newStock) {
      // Aseguro de que newStock sea un número
      newStock = Number(newStock);
      console.log(`Updating stock for product ${id} to ${newStock}`);
      axios
        .post("http://localhost/mi_proyecto/update_stock.php", {
          id: id,
          stock: newStock,
        })
        .then(() => {
          // Espera a que se complete la actualización del stock antes de volver a buscar los productos
          return this.fetchProducts();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteProduct(id) {
      axios
        .post("http://localhost/mi_proyecto/delete_product.php", { id })
        .then(() => {
          this.fetchProducts();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getImage(imageName) {
      return require(`@/assets/${imageName}`);
    },
    resetForm() {
      this.name = "";
      this.description = "";
      this.price = 0;
      this.stock = 0;
      this.image = "";
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.admin-container {
  background-color: #f2f2f2; /* Fondo gris claro */
  padding: 20px;
  border-radius: 5px;
}

.title {
  font-family: Georgia, "Times New Roman", Times, serif;
  background-color: #2489f5; /* Azul */
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
}
.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  width: calc(
    33.33% - 10px
  ); /* Ajusta esto según el espacio que quieras entre las columnas */
  margin-bottom: 20px;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.cerrar-sesion {
  margin-bottom: 20px; /* Esto añade espacio en la parte inferior */
  background: linear-gradient(to right, #6c757d, rgb(172, 172, 172));
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.cerrar-sesion:hover {
  transform: scale(1.05);
  background: linear-gradient(to right, #5a6268, white);
}
</style>
