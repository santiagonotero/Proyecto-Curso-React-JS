import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"

import "./ItemListContainer.css";

const DataQuery = async ()=>{

    //const API_URL = 'https://mocki.io/v1/39768f5e-4a94-4c56-a0a9-508de5147ed4'

    const API_URL = 'https://mocki.io/v1/79958442-7844-45f4-9af9-ecaa50cb68bc';

    let response = await fetch(API_URL);
    let json= await response.json();

    return json;  
}

const ItemListContainer = ()=>{

    let[products, setProducts]=useState([]);

    const {id} = useParams();

    useEffect(()=>{

        DataQuery().then((data)=>{

            if(id){
                let filteredData= data.filter((item)=>item.producto === id);
                setProducts(filteredData);
            }

            else{
                setProducts(data);
            }

        })
        
    }, [id]);

        return(
            <div className="CountContainer">
                <ItemList products={products}/>
            </div>
        );
   
}

export default ItemListContainer;