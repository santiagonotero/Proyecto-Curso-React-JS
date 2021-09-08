import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import ItemDetail from "../ItemDetail/ItemDetail";

//const API_URL ="./Server/products.json";

const API_URL = 'https://mocki.io/v1/9b52541f-adb5-4dc2-b8cb-481f79980be0'

//const searchId="5"


const GetItems = async (searchId)=>{

    let aux=[];

        let response = await fetch(API_URL);
        let json= await response.json();
        aux=json.filter(data => data.id=== searchId);

    return aux;       
}

const ItemDetailContainer= (searchId) =>{

    const[dataToShow, setDataToShow]= useState([]);
    //const {searchId}= useParams();


    useEffect(()=>{ 
        
        
        //console.log(searchId)      

        setTimeout(()=>{
            GetItems(searchId)
            .then((data)=> {
                setDataToShow(data);
                
            });
        }, 2000)
        //console.log(dataToShow);
        
    },[]);

    return (
        <>
            {dataToShow.length=== 0 ? (
                <h1>Cargando...</h1>
            ):(
                <ItemDetail key={dataToShow.map(filter=> filter.id)} marca={dataToShow.map(filter=> filter.marca)} 
                producto={dataToShow.map(filter=> filter.producto)} precio={dataToShow.map(filter=> filter.precio)}
                descripcion={dataToShow.map(filter=> filter.descripcion)} ></ItemDetail>
            )}
        
        </>
    );
// 
}


export default ItemDetailContainer;