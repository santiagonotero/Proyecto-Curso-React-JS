import React, {useContext, useEffect, useState, setState, Component, useMemo} from "react";
import { context } from "../CartContext/CartContext";
import NavBar from "../NavBar/NavBar";
import "./Cart.css"
import ReactDOM from "react-dom";



const Cart=()=>{
    
    const {cart, removeItem}=useContext(context);

    const [cartList, setCartList]=useState([]);


    useEffect(()=>{
        
        console.log ("useEffect")
        
        setCartList(cart);

        
        
    }, [cart]);
        
        
        const deleteItem=(e, itemId)=>{
            
            e.preventDefault();
            removeItem(itemId);
            setCartList(cart);
            console.log("deleteItem -> cartList: %o", cartList);
            
            //ReactDOM.render()
            //ReactDOM.render(<Cart />, document.getElementById("root"));
            //setSr
            
        }
        
        
        return (
            <>
                <h1>Carrito de compras</h1>
                {cartList.length===0 ?
                    (
                    <h2>No hay productos en su carrito</h2>
                    ):(
                    <table className="cartTableStyle">
                        <thead>
                            <tr>
                                <th><p>Producto</p></th>
                                <th><p>Precio</p></th>
                                <th><p>Cantidad</p></th>
                                <th><p>Subtotal</p></th>
                                <th><p>Eliminar</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map((itemToShow)=> {return (<tr key={itemToShow.id}><td><p>{itemToShow.descripcion}</p></td> 
                                <td><p>ARS {itemToShow.precio}</p></td> 
                                <td><p>{itemToShow.itemsToAdd}</p></td> 
                                <td><p>ARS {parseInt(itemToShow.precio) * itemToShow.itemsToAdd}</p></td> 
                                <td><button onClick={(e)=>{deleteItem(e, itemToShow.id)}}>Eliminar</button></td></tr>)})}
                        </tbody>
                    </table>
                    )}

            </>
        );

}

export default Cart