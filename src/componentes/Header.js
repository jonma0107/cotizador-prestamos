// import React, { Fragment } from 'react';
import React from 'react'; // al no tener return no es necesario el FRAGMENT



// Con Expression Function
const Header = ({ titulo }) => ( // si das por implicito el return no vas a escribir codigo JS
  <h1>{titulo}</h1>
);

export default Header;

// Con Función Declarativa:

// function Header({titulo}) {
//   return (
//     <Fragment>
//       <h1>{titulo}</h1>
//     </Fragment>
//     );
// }

// export default Header;
