import React from "react";
import {Link} from "react-router-dom";

import "../Item/Item.css"

const Item=({elementId, producto, marca, stock}) =>{

    console.log(elementId)

    return(
        
        <div id="itemBlock">
            <p>Producto: {producto}</p>
            <p>Marca: {marca}</p>
            <p>Stock disponible: {stock} artículos</p>
            <Link to={'/Item/'+ elementId}><p>Más información</p></Link>
        </div>
        
    );
}

export default Item;