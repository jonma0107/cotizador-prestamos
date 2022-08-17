import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario.js';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

// un return siempre retorna un elemento que contiene los demás elementos
// react tiene una sintaxis similar a xml

function App() { // este es el principal componente

  // Para que los useState fluyan del padre al hijo se colocan en el componente principal

  //Definir el State
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;

  if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />

  }


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
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />

        <div className="mensajes">
          {componente}
        </div>

      </div>

    </ Fragment >
  );
}

export default App;
