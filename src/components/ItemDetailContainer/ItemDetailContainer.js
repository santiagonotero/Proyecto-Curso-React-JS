import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { firestore } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer= () =>{

    const[dataToShow, setDataToShow]= useState([]);
    const {id}= useParams();
  

    useEffect(()=>{  
        
         let collection = firestore.collection("items")
            const product= collection.doc(id)
            product.get()           
                .then((snapshot)=>{
                    setDataToShow([snapshot.data()]);
                })
            
    },[id]);

    return (
        <>
            {dataToShow.length=== 0 ? (
                <h1>Cargando...</h1>
            ):(
                dataToShow.map(product =><ItemDetail key={product.id} itemToShow={product} />)
                
            )}
        
        </>
    ); 
}


export default ItemDetailContainer;

