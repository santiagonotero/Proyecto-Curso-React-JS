import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../CartContext/CartContext";
import "./CartWidget.css"

const CartWidget = () =>{

    const {cart} =useContext(context);



    return(
        <div className="cartWidgetContext">
            <Link to="../Cart" className="material-icons" id="iconoCarrito">shopping_cart {cart.length === 0 ? (
                null
            ):(
                <p className="cartCounter">{cart.length}</p>
            )}</Link>
            
        </div>
    );
}

export default CartWidget;
