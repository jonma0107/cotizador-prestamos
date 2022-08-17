import React from 'react';

const Resultado = ({ cantidad, plazo, total }) => (
  <div className="u-full-width resultado">
    <h2>Resumen</h2>
    <p>La Cantidad solicitada es : $ {cantidad} </p>
    <p>A pagar en {plazo} Meses </p>
    <p> Su pago mensual es de : $ {(total / plazo).toFixed(2)}</p>
    <p> <h3>Total a Pagar : $ {(total).toFixed(2)} </h3></p>
  </div>
);


export default Resultado;
