import React, {useContext, useEffect, useState} from "react";
import { context } from "../CartContext/CartContext";
import { firestore } from "../../firebase";
import '../../styles/Styles.scss';


const Order=()=>{

    let{cart} = useContext(context);
    const db = firestore.collection("ordenes");

    const[nombre, setNombre]=useState("");
    const[telefono, setTelefono]=useState("");
    const[email, setEmail]=useState("");

    useEffect(()=>{

        

    },[]);

    const saveName=(e)=>{
        setNombre(e.target.value);
    }

    const savePhone=(e)=>{
        setTelefono(e.target.value);
    }
    const saveEmail=(e)=>{
        setEmail(e.target.value);
    }

    const sendOrder=(e)=>{
        
        const buyer = {nombre: nombre, telefono: telefono, email: email}
        const order ={buyer, cart};
        const query = db.add(order);
        query
            .then(alert("Ya se ha enviado su pedido. Muchas gracias por su compra"))
            .catch((err)=>{console.err(err)})
    }

    return(
        <>
            <h1 id="orderCaption">Datos del comprador</h1>
            <form className="buyerForm">
                <label><p className="formLabel">Nombre:</p></label>
                <input placeholder="Nombre" type="text" onChange={saveName} /> <br /><br />
                <label><p className="formLabel">Teléfono:</p></label>
                <input placeholder="Teléfono" type="number" onChange={savePhone} /><br /><br />
                <label><p className="formLabel">E-mail:</p></label>
                <input placeholder="E-mail" type="email" onChange={saveEmail} /><br /><br />

                <button className="standardButton" onClick={sendOrder}>Enviar</button>
            </form>
            <div className="areaFill" />
            <div className="areaFill" />
        </>
    );
}

export default Order
