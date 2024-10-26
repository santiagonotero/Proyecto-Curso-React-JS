import React from "react";

const Contacto =()=>{

    return(
        <>
            <h1>Contacto</h1>
            <p>Para entrar en contacto con nosotros, completá el siguiente formulario abajo. Nos pondremos en contacto con vos a la brevedad</p>
            <form id="contactForm">
                <p>Nombre completo</p>
                <input id="formName" type="text" />
                <p>Teléfono</p>
                <input id="formTelefono" type="number" />
                <p>Correo electrónico</p> 
                <input id="formEmail" type="email" />
                <p>Mensaje</p>
                <textarea cols="39" rows="10"  id="formMessage" /> <br />
                <button type="submit" className="standardButton" >Enviar</button>
            </form> 
            <div className="areaFill" />
        </>
    )

}

export default Contacto