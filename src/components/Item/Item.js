import React from "react";
import {Link} from "react-router-dom";
import '../../styles/Styles.scss';

const Item=({element}) =>{

    return(
        
        <div className="itemBlock">
        <img src={element.th_image} />
            <p><b>Producto:</b> {element.titulo_producto}</p>
            <p><b>Marca:</b> {element.marca}</p>
            <p><b>Stock disponible:</b> {element.stock} artículos</p>
            <Link to={'/Item/'+ element.queryId} className="itemFooter"><p>Más información</p></Link>
            <p className="ItemPriceFont">ARS {element.precio}</p>
        </div>
        
        );
    }
    
    export default Item;