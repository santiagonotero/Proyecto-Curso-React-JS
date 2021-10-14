import React from "react"
import {Link} from "react-router-dom"
import "../src/styles/Styles.scss"

const PComerciales=()=>{


    return(
        <>
        <div className="mainContainer">
            <h1 className="centeredText">Propuestas comerciales</h1>

            <p>No nos importa si sos un simple usuario de computadora hogareña o un gerente 
            de una gran compañía que busca instalar un gran sistema informático dentro de la empresa. 
            Envianos un <Link to="/contacto">mensaje</Link> completando el formulario abajo, y cualquiera sea tu situación, te vamos 
            a ayudar a que encuentres la mejor solución a tu necesidad.</p>
            <h1>  </h1><br />
            <p>Compumaxx...maximiza tu experiencia!!!</p>
        </div>
        <div className="areaFill" />
        <div className="areaFill" />
        <div className="areaFill" />
        </>
    );
}

export default PComerciales
