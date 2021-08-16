import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import SubmenuNP from "../SubmenuNP/SubmenuNP"
import SubmenuNS from "../SubmenuNS/SubmenuNS"


const NavBar=() =>{
  
    return(
        <header>
            <h1 id="titulo">E-commerce</h1>
            <ul id="menuPpal">
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Nuestros productos</a>
                    <SubmenuNP />
                </li>
                <li><a href="#">Nuestros servicios</a>
                    <SubmenuNS />
                </li>
                <li><a href="#">Cómo comprar</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
            
        </header>
    )
}

export default NavBar;