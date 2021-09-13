import {useState} from "react"
import { Redirect, useHistory } from "react-router-dom";
import "./ItemCount.css"




const ItemCount = ({stock, initial, onAdd})=>{

    let [contador, setContador]=useState(initial);
    let [buttonFunc, setButtonFunc] = useState('Agregar');
    let history = useHistory();


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
            setButtonFunc('Terminar');
        }
    }      

    const terminar=(e)=>{

        e.preventDefault();
        history.push('../Cart');

    }

    return(
        <div className="ButtonContainer" >
            <p id="leyenda">Cantidad de productos:</p>
            <p id="contador">{contador}</p>
            <button onClick={sumar} disabled={stock>0 ? false:true} id="botonMas">+</button>
            <button onClick={restar} disabled={stock>0 ? false:true} id="botonMenos">-</button>
            {buttonFunc === 'Agregar' ? 
            (
                <button onClick={agregar} disabled={stock>0 ? false:true} id="botonAgregar">Agregar al carrito</button>
                
            ):(
                <button id="botonAgregar" onClick={terminar} > Terminar compra</button>
                
                
            )}
        </div>
        );

}

export default ItemCount;
