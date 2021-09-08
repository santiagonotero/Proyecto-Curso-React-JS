import React from "react";
import {Link, useParams} from "react-router-dom";

import "../Item/Item.css"

const Item=({key, producto, marca, stock}) =>{

    const {id}=useParams();

    console.log(id)

    return(
        <Link to={`/Item/${id}`}>
            <div id="itemBlock">
                <p>Producto: {producto}</p>
                <p>Marca: {marca}</p>
                <p>Stock disponible: {stock} artículos</p>
            </div>
        </Link>
    );
}

export default Item;