import React, {useContext, useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../CartContext/CartContext";
import {context} from "../CartContext/CartContext";
import {useHistory} from "react-router-dom";
import "../ItemDetail/ItemDetail.css"


const ItemDetail=({itemToShow})=>{
        
        let history = useHistory();
        const {addItem} = useContext(context);

        console.log("itemDetail -> itemToShow: %o", itemToShow)

        let [addedToCart, setAddedToCart] = useState(false);
        
        const addProduct=(itemsToAdd)=>{
            
            setAddedToCart(true);

            let newItem = {

            id: itemToShow.id,
            itemsToAdd: itemsToAdd,
            producto: itemToShow.producto,
            marca: itemToShow.marca, 
            stock: itemToShow.stock,
            descripcion: itemToShow.descripcion,
            precio: itemToShow.precio

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
                <p className="descFont"> Producto: {itemToShow.producto} </p>
                <p className="descFont">Marca: {itemToShow.marca} </p>
                <p className="descFont">Descripción: {itemToShow.descripcion} </p>
                <p className="descFont">Precio: {itemToShow.precio} </p>
                <p className="descFont">Cantidad disponible: {itemToShow.stock} artículos</p>
                {addedToCart=== false ? (
                    <ItemCount stock={itemToShow.stock} initial={1} onAdd={addProduct} id={itemToShow.id}/>
                    ):(
                    <button onClick={terminar} className="buttonTerminar"> Terminar compra</button>
                    )
                }
        </div>
    );
}


export default ItemDetail;