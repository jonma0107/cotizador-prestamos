import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario.js'

// un return siempre retorna un elemento que contiene los demás elementos
// react tiene una sintaxis similar a xml

function App() { // este es el principal componente

  // Para que los useState fluyan del padre al hijo se colocan en el componente principal

  //Definir el State
  const [cantidad, guardarCantidad] = useState(0)
  const [plazo, guardarPlazo] = useState(0)


  // se pasa las funciones del componente padre a los hijos vía PROPS
  return (
    < Fragment >

      <Header
        titulo="Cotizador de prestamos"
      />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
        />
      </div>

    </ Fragment >
  );
}

export default App;
