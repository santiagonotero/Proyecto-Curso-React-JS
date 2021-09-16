import React, {useEffect, useState} from "react";

import Item from "../Item/Item"
    
    
 const ItemList=({products}) =>{  // Selecciona los datos requeridos y arma una lista con ellos
 
        const[dataToShow, setDataToShow]= useState([]);
    
        console.log(products);

         useEffect(()=>{

        setDataToShow(products);
            
        });


        return (dataToShow.length === 0 ? (
            <h1>Sin stock</h1>):
            (
                <>
                    {dataToShow.map(element => {
                        return <Item element={element} />
                        
                        }
                    )}
                    
                </>
            ));

}

export default ItemList;