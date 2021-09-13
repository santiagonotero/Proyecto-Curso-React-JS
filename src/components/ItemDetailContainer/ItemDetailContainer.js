import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import ItemDetail from "../ItemDetail/ItemDetail";

const API_URL = 'https://mocki.io/v1/39768f5e-4a94-4c56-a0a9-508de5147ed4'


const GetItems = async ()=>{

    let response = await fetch(API_URL);
    let json= await response.json();
    return json;   
}

const ItemDetailContainer= () =>{

    const[dataToShow, setDataToShow]= useState([]);
    const {id}= useParams();
  

    useEffect(()=>{       

        setTimeout(()=>{
            GetItems()
            .then((data)=> {
                let filtered=data.filter(index=>index.id===id)
                setDataToShow(filtered);
                console.log(filtered);
            });
        }, 2000)
        
        
    },[id]);

    console.log(dataToShow);

    return (
        <>
            {dataToShow.length=== 0 ? (
                <h1>Cargando...</h1>
            ):(
                <ItemDetail 
                id={dataToShow.map(filter=> filter.id)} marca={dataToShow.map(filter=> filter.marca)} 
                producto={dataToShow.map(filter=> filter.producto)} precio={dataToShow.map(filter=> filter.precio)}
                descripcion={dataToShow.map(filter=> filter.descripcion)} stock={dataToShow.map(filter=> filter.stock)}>

                </ItemDetail>
            )}
        
        </>
    ); 
}


export default ItemDetailContainer;






                