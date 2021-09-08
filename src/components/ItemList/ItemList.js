import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import Item from "../Item/Item"
    

const DataQuery = async ()=>{ 


    const API_URL = 'https://mocki.io/v1/9b52541f-adb5-4dc2-b8cb-481f79980be0'

        let response = await fetch(API_URL);
        let json= await response.json();

        console.log(json)

    return json;         

        // return new Promise((resolve, reject) =>{
        //     setTimeout(()=>
        //         resolve([{id:1, producto: 'computadora', marca: 'Dell', stock:5},
        //         {id:2, producto: 'computadora', marca: 'Samsung', stock:9},
        //         {id:3, producto: 'memoria ram', marca: 'Kingston', stock:4},
        //         {id:4, producto: 'disco rigido', marca: 'Western Digital', stock:8},
        //         {id:5, producto: 'disco rigido', marca: 'Samsung', stock:5},
        //         {id:6, producto: 'notebook', marca: 'HP', stock:7},
        //         {id:7, producto: 'monitor', marca: 'Dell', stock:3},
        //         {id:8, producto: 'monitor', marca: 'Samsung', stock:2}
        //         ]), 2000)
        // })
}
    
 const ItemList=() =>{  // Selecciona los datos requeridos y arma una lista con ellos
 
        const[dataToShow, setDataToShow]= useState([]);
    
        const {id} =useParams();    //El id recibido desdde App.js que pasa a ItemListContainer.js


        useEffect(()=>{

                DataQuery().then((data)=>{
                    if(id){
                        console.log(id);
                        let filteredData= data.filter((item)=>item.producto === id);
                        console.log(filteredData);
                        setDataToShow(filteredData);
                        console.log(dataToShow)
                    }

                    else{
                        setDataToShow(data);
                        console.log(data)
                    }

                })
            
        }, [id]);


        return (dataToShow.length === 0 ? (
            <h1>Cargando...</h1>):
            (
                <ul>
                    {dataToShow.map((element) => (
                        <Item key={id} producto={element.producto} marca={element.marca} stock={element.stock}></Item> 
                        
                        )
                    )}
                </ul>
            ));

}


export default ItemList;