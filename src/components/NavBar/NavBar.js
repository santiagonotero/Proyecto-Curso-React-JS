import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import SubmenuNP from "../SubmenuNP/SubmenuNP"
import SubmenuNS from "../SubmenuNS/SubmenuNS"
import {Link} from "react-router-dom"


const NavBar=() =>{
  
    return(
        <header>

            <h1><Link to="/"> E-commerce</Link></h1>
            <ul id="menuPpal">

                <li><Link to="/QuienesSomos">Quienes somos</Link></li>
                <li><Link to="/Productos">Nuestros productos</Link>              
                    <SubmenuNP />
                </li>
                <li><Link to="/Servicios">Nuestros servicios</Link>
                    <SubmenuNS />
                </li>
                <li><Link to="/ComoComprar">Cómo comprar</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>

            <CartWidget />
        </header>
    )
}

export default NavBar;