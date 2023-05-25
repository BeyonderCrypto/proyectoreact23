import { useEffect, useState } from "react"
import axios from "axios"

function App() {
const API_URL = import.meta.env.VITE_API_URL

  const [criptos,setCriptos] = useState()

  // VERSION SIN AXIOS
  /*useEffect(() => {
    fetch(`${API_URL}assets`)
    .then((resp) => resp.json() )
    .then((data) => {
      setCriptos(data.data)
      console.log(data)
    })
    .catch(() => {
      console.error("la petición de datos al API de coincap falló.")
    })
  }, [])*/

  // VERSION CON AXIOS
  useEffect(() => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCriptos(data.data.data)
      console.log(data.data.data)
    })
    .catch(() => {
      console.error("la petición de datos al API de coincap falló.")
    })
  }, [])

  if (!criptos) return <span>Cargando...</span>
  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {
          criptos.map(({id, name, priceUsd}) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
          ))
        }
      </ol>
    </>  
  )
}

export default App
