import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useJuegosStore = defineStore('juegos', () => {
  const juegos = ref([])

  async function fetchJuegos() {
    try {
      const url = '/api/juegos.json'
      const { data } = await axios.get(url)

      juegos.value = data
    } catch (error) {
      alert('No se han encontrado Juegos')
      console.error(error)
    }
  }

  function aumentarStock(codigo) {
    juegos.value.map((juego) => {
      if (juego.codigo === codigo) {
        juego.stock++
      }
    })
  }

  function disminuirStock(codigo) {
    juegos.value.map((juego) => {
      if (juego.codigo === codigo) {
        juego.stock--
      }
    })
  }

  return { juegos, fetchJuegos, aumentarStock, disminuirStock }
})
