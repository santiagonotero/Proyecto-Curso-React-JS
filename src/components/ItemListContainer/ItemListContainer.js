import {React, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";


const ItemListContainer = ()=>{

    const {id}=useParams();
    
    useEffect(()=>{

        
    }, [])

        return(
            <div className="CountContainer">
                {/* <ItemCount stock={5} initial={1} onAdd{... () => {}}/> */}
                <ItemList />
            </div>
        );
   
}

export default ItemListContainer;