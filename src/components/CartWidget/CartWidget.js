import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../CartContext/CartContext";
import "./CartWidget.css"

const CartWidget = () =>{

    const {cart} =useContext(context);

    const totalItemsOnCart=(cart)=>{

        let total = 0;

        cart.map((items)=>{
                    total += parseInt(items.itemsToAdd);
                    console.log("total : " + total);
                })
        return total;
    }


    return(
        <div className="cartWidgetContext">
            <Link to="../Cart" className="material-icons" id="iconoCarrito">shopping_cart {cart.length === 0 ? (
                null
            ):(
                <p className="cartCounter">{totalItemsOnCart(cart)}</p>
            )}</Link>
            
        </div>
    );
}

export default CartWidget;
