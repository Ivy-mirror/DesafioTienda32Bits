<script>
import { mapStores } from 'pinia'
import { useJuegosStore } from '@/stores/juegos'

export default {
  computed: {
    ...mapStores(useJuegosStore)
  },
  created() {
    this.juegosStore.fetchJuegos()

    console.log(this.juegosStore.juegos)
  },
  methods: {
    aumentarStock(codigo) {
      this.juegosStore.aumentarStock(codigo)
    },
    disminuirStock(codigo) {
      this.juegosStore.disminuirStock(codigo)
    }
  }
}
</script>

<template>
  <div>
    <h1 class="h1">Tienda 32 bits</h1>
    <p class="p">Lista de Juegos</p>

    <table class="my-table">
      <thead>
        <tr>
          <th class="table-header">Código</th>
          <th class="table-header">Nombre</th>
          <th class="table-header">Stock</th>
          <th class="table-header">Precio</th>
          <th class="table-header">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegosStore.juegos" :key="juego.codigo">
          <td class="table-cell">{{ juego.codigo }}</td>
          <td class="table-cell">{{ juego.nombre }}</td>
          <td class="table-cell">{{ juego.stock }}</td>
          <td class="table-cell">{{ juego.precio }}</td>
          <td class="table-cell">
            <button @click="aumentarStock(juego.codigo)">Aumentar</button>
            <button @click="disminuirStock(juego.codigo)">Dismuir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.my-table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #ddd;
}

.table-header {
  background-color: #22043c;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  border: 2px solid #ddd;
  text-align: center;
  color: rgb(209, 97, 209);
}

.table-cell {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  border: 2px solid #ddd;
  text-align: center;
  align-items: center;
  color: purple;
}
.h1 {
  text-align: center;
  color: purple;
}
.p {
  text-align: center;
  color: purple;
}
</style>
