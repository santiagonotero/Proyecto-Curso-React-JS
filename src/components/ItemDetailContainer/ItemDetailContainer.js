import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { firestore } from "../../firebase";
import ItemDetail from "../ItemDetail/ItemDetail";


// const API_URL = 'https://mocki.io/v1/79958442-7844-45f4-9af9-ecaa50cb68bc';


// const GetItems = async ()=>{

//     let response = await fetch(API_URL);
//     let json= await response.json();
//     return json;   
// }

const ItemDetailContainer= () =>{

    const[dataToShow, setDataToShow]= useState([]);
    const {id}= useParams();
  

    useEffect(()=>{  
        
        
         //Referencia de la base de datos
            
         //const db = firestore;
            
         //Referencia a la collection

         //let collection = firestore.collection("items").where('id', '==' , parseInt(id));
         let collection = firestore.collection("items")
            const product= collection.doc(id)
            product.get()           
                .then((snapshot)=>{
                    setDataToShow([snapshot.data()]);
                })

        // setTimeout(()=>{
        //     GetItems()
        //     .then((data)=> {
        //         let filtered=data.filter(index=>index.id===parseInt(id))
        //         setDataToShow(filtered);
        //     });
        // }, 2000)
            
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

