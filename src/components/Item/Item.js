import React from "react";

import "../Item/Item.css"

const Item=({id, producto, marca, stock}) =>{
    console.log(id);
    console.log({producto});
    console.log({marca});

    return(

        <div id="itemBlock">
            <p>Producto: {producto}</p>
            <p>Marca: {marca}</p>
            <p>Stock disponible: {stock} artículos</p>
        </div>
    );
}

export default Item;