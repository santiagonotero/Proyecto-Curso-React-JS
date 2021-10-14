import React from "react";
import {Link} from "react-router-dom"
import "../src/styles/Styles.scss"

const Capacitacion=()=>{


    return(
        <div className="mainContainer">
            <h1 className="centeredText">Capacitación</h1>
            <p>Si tenés personal a cargo que no se lleva bien con las computadoras, no te aflijas. 
            Nosotros ofrecemos servicio de capacitación corporativa. Entrenamos a grupos de personas en el manejo de software para empresas. 
            Desde simples programas para ofimática hasta sofisticados softwares de simulación, edición y proyectos.</p>
            <p>Entrá en <Link to="/contacto">contacto</Link> con nosotros, explicanos bien tu necesidad y te vamos a contactar para hacerte una propuesta
            acorde a tu necesidad</p>
            <h1>  </h1><br />
            <p>Compumaxx...maximiza tu experiencia!!!</p>
            <div className="areaFill" />
            <div className="areaFill" />
            <div className="areaFill" />
        </div>
    );
}

export default Capacitacion
