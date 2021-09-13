import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import Item from "../Item/Item"
    
    
 const ItemList=({products}) =>{  // Selecciona los datos requeridos y arma una lista con ellos
 
        const[dataToShow, setDataToShow]= useState([]);
    
        const {id} =useParams();
        console.log(products);

        useEffect(()=>{
            
            if(id){
                console.log(id);
                let filteredData= products.filter((item)=>item.producto === id);
                console.log(filteredData);
                setDataToShow(filteredData);
            }

            else{
                setDataToShow(products);
            }
            
        }, [id]);


        return (dataToShow.length === 0 ? (
            <h1>Sin stock</h1>):
            (
                <>
                    {dataToShow.map(element => {
                        return <Item elementId={element.id} producto={element.producto} marca={element.marca} stock={element.stock} /> 
                        }
                    )}
                    
                </>
            ));

}


export default ItemList;