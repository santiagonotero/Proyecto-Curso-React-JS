import {React, useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom"

import "./ItemListContainer.css";

const DataQuery = async ()=>{

    const API_URL = 'https://mocki.io/v1/39768f5e-4a94-4c56-a0a9-508de5147ed4'

    let response = await fetch(API_URL);
    let json= await response.json();

    return json;  
}

const ItemListContainer = ()=>{

    let[products, setProducts]=useState([]);

    const {id} = useParams();

    useEffect(()=>{

        DataQuery().then((data)=>{
            setProducts(data);
        })
        
    }, [id]);

    console.log(products)

        return(
            <div className="CountContainer">
                {/* <ItemCount stock={5} initial={1} onAdd{... () => {}}/> */}
                <ItemList products={products}/>
            </div>
        );
   
}

export default ItemListContainer;