import React from 'react';
import '../Footer/index.css';

import logoDinfo from "../../image/logo_dinfo.gif"
import logoPRD from "../../image/logo_sr1.gif"

function Footer() {
  return (
    <div className='container' id="foot">
         <img src={logoDinfo} alt="Dinfo" />
         <p>© 2019, Universidade do Estado do Rio de Janeiro. Todos os Direitos Reservados.</p>
        <img src={logoPRD} alt="PRO REITORIA" /> 
    </div>
  )
}

export default Footer