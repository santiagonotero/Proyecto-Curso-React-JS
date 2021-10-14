import React from "react"
import {Link} from "react-router-dom"
import "../src/styles/Styles.scss"

const Asesoramiento=()=>{


    return(
        <>
        <div className="mainContainer">
            <h1 className="centeredText">Asesoramiento</h1>
            <p>¿Te cuesta trabajar con la computadora? ¿Algo de tu computadora no funciona como quisieras? No te preocupes, para eso estamos nosotros. 
            Tanto si usás tu computadora para algo simple como redactar textos, o para trabajos bien complejos como la edición de vídeos o animaciones 3d, 
            nuestro staff está capacitándose permanentemente en lo último en tecnología para brindarte la mejor solución de acuerdo a tu necesidad y presupuesto disponible.
            Envianos un <Link to="/contacto">mensaje</Link> completando el formulario de abajo y uno de nuestros especialistas se pondrá en contacto con vos y le dará seguimiento a tu consulta.</p>
        </div>
        <div className="areaFill" />
        <div className="areaFill" />
        <div className="areaFill" />
        </>
    );
}

export default Asesoramiento
