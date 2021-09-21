import React, {createContext, useState} from "react";
import Cart from "../Cart/Cart";

export const context=createContext();

const {Provider} = context

const CartContext=({children})=>{

    const [cart, setCart]=useState([]);


    const addItem=(newItem)=>{

        const itemPos = isInCart(newItem.id);

        if(itemPos >= 0){

            const aux_cart= cart;
            aux_cart[itemPos].itemsToAdd += newItem.itemsToAdd;
            setCart([...aux_cart]);
        }

        else{
            setCart([...cart, newItem])
        }
        
    }
    
    
    const removeItem=(itemId)=>{

        let aux_cart=cart;
        let itemPos = isInCart(itemId);
        aux_cart.splice(itemPos,1);
        setCart([...aux_cart]);

        return(<Cart />)
        
    }
    
    const clear=()=>{
        
        setCart([]);
        
    }
    
    const context={cart, addItem, removeItem} 
    const isInCart=(id)=>{
        
        return cart.findIndex(item => item.id ===id);
    }


    return(
        <Provider value={context}>
            {children}
        </Provider>
    );

}

export default CartContext;
