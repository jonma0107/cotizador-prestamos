import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers.js'

function Formulario(props) {

  const { cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props;

  // Definir STATE para el ERROR
  const [error, guardarError] = useState(false)

  // ******************************** CUANDO EL USUARIO HACE SUBMIT ***************************
  const calcularPrestamo = e => {
    e.preventDefault();

    //Validar
    if (cantidad === 0 || plazo === 0) {
      guardarError(true);
      return
    }

    // eliminar el error previo
    guardarError(false);

    // Habilitar el Spinner
    guardarCargando(true);

    setTimeout(() => {
      // *********************************** Realizar cotización ************************************
      const total = calcularTotal(cantidad, plazo);

      // UNA VEZ CALCULADO GUARDAR TOTAL
      guardarTotal(total)

      //Deshabilitar Spinner
      guardarCargando(false)
    }, 3000);

  } // fin calcularPrestamo

  // *************** FUNCION PARA GUARDAR LA CANTIDAD EN LA VARIABLE CANTIDAD DEL STATE **********
  const leerCantidad = (e) => {
    guardarCantidad(parseInt(e.target.value));
  }

  const leerPlazo = (e) => {
    guardarPlazo(parseInt(e.target.value));
  }

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>

        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={leerPlazo}
            >
              <option value="0">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>

      {(error) ? <p className='error'>Todos los campos son Obligatorios!</p> : null}

    </Fragment>
  )

}

export default Formulario;
