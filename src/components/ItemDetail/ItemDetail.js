import React, {useContext, useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../CartContext/CartContext";
import {context} from "../CartContext/CartContext";
import {useHistory} from "react-router-dom";
import "../ItemDetail/ItemDetail.css"


const ItemDetail=({id, producto, marca, precio, stock, descripcion})=>{

//const ItemDetail=({itemToShow})=>{
        
        let history = useHistory();
        const {addItem} = useContext(context);

        let [addedToCart, setAddedToCart] = useState(false);
        
        const addProduct=(itemsToAdd)=>{
            
            setAddedToCart(true);

            let newItem = {
            id: parseInt(id),
            itemsToAdd: itemsToAdd,
            producto: `${producto}`,
            marca: `${marca}`,
            stock: parseInt(stock),
            descripcion: `${descripcion}`,
            precio: parseInt(precio)
        } 
        
         addItem(newItem);
        
    }

    const terminar=(e)=>{

        e.preventDefault();
        history.push('../Cart');

    }


    return(
        <div id="itemDetailStyle" >
                <h2 id="detailCaption">Detalles del artículo</h2>
                <p className="descFont"> Producto: {producto}` </p>
                <p className="descFont">Marca: {marca} </p>
                <p className="descFont">Descripción: {descripcion} </p>
                <p className="descFont">Precio: {precio} </p>
                <p className="descFont">Cantidad disponible: {stock} artículos</p>
                {addedToCart=== false ? (
                    <ItemCount stock={stock} initial={1} onAdd={addProduct} id={id}/>
                    ):(
                    <button onClick={terminar} className="buttonTerminar"> Terminar compra</button>
                    )
                }
        </div>
    );
}


export default ItemDetail;