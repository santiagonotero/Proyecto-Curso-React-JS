import React from "react";
import ItemCount from "../ItemCount/ItemCount";

import "../ItemDetail/ItemDetail.css"

const ItemDetail=({id, producto, marca, precio, stock, descripcion})=>{


    const addItem=(itemsToAdd)=>{

        console.log("Productos a agregar desde el ItemCount -> "+itemsToAdd);
        return itemsToAdd;
    }


    return(
        <div id="itemDetailStyle" >
                <h2 id="detailCaption">Detalles del artículo</h2>
                <p className="descFont"> Producto: {producto} </p>
                <p className="descFont">Marca: {marca} </p>
                <p className="descFont">Descripción: {descripcion} </p>
                <p className="descFont">Precio: {precio} </p>
                <p className="descFont">Cantidad disponible: {stock} artículos</p>

                <ItemCount stock={stock} initial={1} onAdd={addItem} />
        </div>
    );
}


export default ItemDetail;