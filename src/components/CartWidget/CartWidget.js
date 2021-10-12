import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../CartContext/CartContext";
import '../../styles/Styles.scss';

const CartWidget = () =>{

    const {cart} =useContext(context);

    const totalItemsOnCart=(cart)=>{

        let total = 0;

        cart.map((items)=>{
                    total += parseInt(items.itemsToAdd);
                })
        return total;
    }


    return(
        <div className="cartWidgetContext">
        <table>
        <tbody>
            <tr><td><Link to="../Cart" className="material-icons" id="iconoCarrito">shopping_cart</Link></td><td>{cart.length === 0 ? (
                <p>   </p>
            ):(
                <p className="cartCounter">{totalItemsOnCart(cart)}</p>
            )}</td></tr>
        </tbody>
        </table>
        </div>
    );
}

export default CartWidget;
