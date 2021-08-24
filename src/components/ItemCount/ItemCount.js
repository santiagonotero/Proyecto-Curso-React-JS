import {useState} from "react"

import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd})=>{

    let [contador, setContador]=useState(initial)

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

    const agregar = ()=>{
        if(stock > 0){
            onAdd(contador);
            console.log("agregar");
        }
    }

        return(
            <div className="ButtonContainer">
                <p id="leyenda">Cantidad de productos:</p>
                <p id="contador">{contador}</p>
                <button onClick={sumar} disabled={stock>0 ? false:true} id="botonMas">+</button>
                <button onClick={restar} disabled={stock>0 ? false:true} id="botonMenos">-</button>
                <button onClick={agregar} disabled={stock>0 ? false:true} id="botonAgregar">Agregar al carrito</button>
            </div>
        );
}

export default ItemCount;