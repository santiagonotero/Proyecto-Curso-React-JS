import React, {createContext, useState} from "react";

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
    
    const context={cart, addItem} 
    
    const removeItem=(itemId)=>{
        let aux_cart=cart;
        aux_cart.splice(itemId-1);
        setCart(aux_cart);
        
    }

    const clear=()=>{

        setCart([]);

    }

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