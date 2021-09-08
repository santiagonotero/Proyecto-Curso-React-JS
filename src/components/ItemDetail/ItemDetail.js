import React from "react";

import "../ItemDetail/ItemDetail.css"

const ItemDetail=({key, producto, marca, precio, descripcion})=>{
    return(
        <div id="itemDetailStyle" key={key}>
            <h2 id="detailCaption">Detalles del artículo</h2>
            <p class="descFont"> Producto: {producto} </p>
            <p class="descFont">Marca: {marca} </p>
            <p class="descFont">Descripción: {descripcion} </p>
            <p class="descFont">Precio : {precio} </p>
            
             
        </div>
    );
}

export default ItemDetail;