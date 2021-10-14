import React, {useContext, useEffect, useState} from "react";
import { context } from "../CartContext/CartContext";
import '../../styles/Styles.scss';
import { useHistory } from "react-router";



const Cart =()=>{
    
    let {cart, removeItem}=useContext(context);
    let history = useHistory();
    const [cartList, setCartList]=useState([]);

    useEffect(()=>{
        
        setCartList(cart);
        
    },[cart]);
        
        
    const deleteItem=(e, itemId)=>{
        
        e.preventDefault();
        removeItem(itemId);
        setCartList(cart);     
    }
    
    const calculateTotal=(cart)=>{

        let total = 0;
        cart.map((item)=>{total += (item.precio * item.itemsToAdd)});
        return total;
    }  



    return (
        <>
        <div className="cartContainer" >
            <div id="cartContainerCaption"><h1>Carrito de compras</h1></div>
            {cartList.length===0 ?
                (
                <div>
                    <h2>No hay productos en su carrito</h2>
                    <button className="standardButton" onClick={()=>{history.push('../')}}>Volver</button>
                </div>
                ):(
                <div>
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
                            {cartList.map((itemToShow)=> {return (<tr key={itemToShow.id}><td className="descriptionCell"><p>{itemToShow.descripcion}</p></td> 
                                <td><p>ARS {itemToShow.precio}</p></td> 
                                <td><p>{itemToShow.itemsToAdd}</p></td> 
                                <td><p>ARS {parseInt(itemToShow.precio) * itemToShow.itemsToAdd}</p></td> 
                                <td><button className="standardButton" onClick={(e)=>{deleteItem(e, itemToShow.id)}}>Eliminar</button></td></tr>)})}
                        </tbody>
                    </table>
                    <h2 className="totalFont">TOTAL: ARS {calculateTotal(cart)}</h2>
                    <button className="standardButton" onClick={()=>{history.push('../Order')}}>Continuar compra</button>
                </div>
                )}
        </div>
        <div className="areaFill" /> 
        <div className="areaFill" />
        <div className="areaFill" />
        </>
    );
}

export default Cart