import React, {useContext, useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import {context} from "../CartContext/CartContext";
import {useHistory} from "react-router-dom";
import '../../styles/Styles.scss';


const ItemDetail=({itemToShow})=>{
        
        let history = useHistory();
        const {addItem} = useContext(context);

        let [addedToCart, setAddedToCart] = useState(false);

        console.log("Imagen link: %s", itemToShow.image)
        
        const addProduct=(itemsToAdd)=>{
            
            setAddedToCart(true);

            let newItem = {

            id: itemToShow.id,
            image: itemToShow.image,
            itemsToAdd: itemsToAdd,
            producto: itemToShow.titulo_producto,
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
        <>
        <div id="itemDetailStyle" >
                <h2 id="detailCaption">Detalles del artículo</h2>
                <img src={itemToShow.image} />
                <p className="descFont"><b>Producto:</b> {itemToShow.titulo_producto} </p>
                <p className="descFont"><b>Marca:</b> {itemToShow.marca} </p>
                <p className="descFont"><b>Descripción:</b> {itemToShow.descripcion} </p>
                <p className="descFont"><b>Precio:</b> ARS {itemToShow.precio} </p>
                <p className="descFont"><b>Cantidad disponible:</b> {itemToShow.stock} artículos</p>
                {addedToCart=== false ? (
                    <ItemCount stock={itemToShow.stock} initial={1} onAdd={addProduct} id={itemToShow.id}/>
                    ):(
                    <button onClick={terminar} className="standardButton"> Terminar compra</button>
                    )
                }
        </div>
        <div className="areaFill" />
        </>
    );
}


export default ItemDetail;