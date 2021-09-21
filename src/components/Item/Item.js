import React from "react";
import {Link} from "react-router-dom";

import "../Item/Item.css"

const Item=({element}) =>{

    return(
        
        <div id="itemBlock">
            <p>Producto: {element.producto}</p>
            <p>Marca: {element.marca}</p>
            <p>Stock disponible: {element.stock} artículos</p>
            <Link to={'/Item/'+ element.id}><p>Más información</p></Link>
        </div>
        
    );
}

export default Item;