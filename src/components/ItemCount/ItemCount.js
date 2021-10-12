import React, {useState} from "react"
import "./ItemCount.css"
//import '../../styles/Styles.scss';


const ItemCount = ({stock, initial, onAdd, id})=>{

    let [contador, setContador]=useState(initial);


    const sumar = ()=>{
        if (contador < stock){
            setContador(contador + 1);
        }
    }

    const restar = ()=>{
        if (contador > 0){
            setContador(contador - 1);
        }
    }

    const agregar = (e)=>{

        e.preventDefault();

        if(contador > 0){
            onAdd(contador);
        }
    }      

    return(
        <div className="ButtonContainer" >
            <p id="leyenda">¿Cuántos productos querés agregar a tu carrito?:</p>
            <p id="contador">{contador}</p>
            <button className="standardButton" onClick={sumar} disabled={stock>0 ? false:true} id="botonMas">+</button>
            <button className="standardButton" onClick={restar} disabled={stock>0 ? false:true} id="botonMenos">-</button>
            <button className="standardButton" onClick={agregar} disabled={stock>0 ? false:true} id="botonAgregar">Agregar al carrito</button>
                
        </div>
        );
        
    }
    
    export default ItemCount;
    