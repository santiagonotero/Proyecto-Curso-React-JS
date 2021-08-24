import React, {useEffect, useState} from "react";

import Item from "../Item/Item"


const DataQuery = () =>{    //Hace consultas a la API por datos

        return new Promise((resolve, reject) =>{
            setTimeout(()=>
                resolve([{id:1, producto: 'computadora', marca: 'Dell', stock:5},
                {id:2, producto: 'computadora', marca: 'Samsung', stock:9},
                {id:3, producto: 'memoria ram', marca: 'Kingston', stock:4},
                {id:4, producto: 'disco rigido', marca: 'Western Digital', stock:8},
                {id:5, producto: 'disco rigido', marca: 'Samsung', stock:5},
                {id:6, producto: 'notebook', marca: 'HP', stock:7},
                {id:7, producto: 'monitor', marca: 'Dell', stock:3},
                {id:8, producto: 'monitor', marca: 'Samsung', stock:2}
                ]), 2000)
        })
    }
    
 const ItemList=() =>{  // Selecciona los datos requeridos y arma una lista con ellos
 
        let[dataToShow, setDataToShow]= useState([]);
    
        useEffect(()=>{
            DataQuery().then((data)=>{
                let filteredData= data.filter((item)=>item.producto =="computadora");
                setDataToShow(filteredData);
            })
        });


        return (dataToShow.length == 0 ? (
            <h1>Cargando...</h1>):
            (
                <ul>
                    {dataToShow.map((element) => (
                        <Item id={element.id} producto={element.producto} marca={element.marca} stock={element.stock}></Item> 
                        
                        )
                    )}
                </ul>
            ));

}


export default ItemList;