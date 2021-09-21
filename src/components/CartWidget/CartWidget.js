import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () =>{

    return(
        <>
        <Link to="../Cart" className="material-icons" id="iconoCarrito">shopping_cart </Link>
        </>
    );
}

export default CartWidget;

//<span href="./Cart" className="material-icons" id="iconoCarrito">shopping_cart</span>