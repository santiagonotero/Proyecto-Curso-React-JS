import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"
import { firestore } from "../../firebase";


import "./ItemListContainer.css";

//const DataQuery = async ()=>{
    
    // const API_URL = 'https://mocki.io/v1/79958442-7844-45f4-9af9-ecaa50cb68bc';

    // let response = await fetch(API_URL);
    // let json= await response.json();

    // return json;  
//}

const ItemListContainer = ()=>{

    let[products, setProducts]=useState([]);

    const {id} = useParams();

    useEffect(()=>{

        //Referencia de la base de datos
            
        //const db = firestore;
        let collection
            
        //Referencia a la collection

        if(id){
            collection = firestore.collection("items").where('producto', '==' , id)
        }
        else{
            collection = firestore.collection("items")
        }


        const query = collection.get();

        query.then((snapshot)=>{
            
            let productList =[];
            // Obteniendo un snapshot de documentos en array
            const docs = snapshot.docs
            //Recorriendo el array de documentos
            docs.forEach((doc)=>{
                
                const docSnapshot = doc
                const productWithId = {...docSnapshot.data(), queryId: docSnapshot.id}
                productList.push(productWithId);
                
            })

                // if(id){

                //     console.log("id: " + id)
                //     let filteredData= productList.filter((item)=>item.producto === id);
                //     setProducts(filteredData);
                // }

                // else{
                    setProducts(productList);
                // }
            
        })
            .catch((error)=>{console.error(error)})
        
    }, [id]);

        return(
            <div className="CountContainer">
                <ItemList products={products}/>
            </div>
        );
   
}

export default ItemListContainer;