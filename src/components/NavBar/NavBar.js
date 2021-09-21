import React from "react"
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
                        <li><Link to="/productos/computadora">Computadoras de escritorio</Link></li>
                        <li><Link to="/productos/notebook" >Notebooks</Link></li>
                        <li><Link to="/productos/monitor" >Monitores</Link></li>
                        <li><Link to="/productos/disco_rigido" >Discos rígidos</Link></li>
                        <li><Link to="/productos/Memoria_RAM" >Memorias RAM</Link></li>
                        <li><Link to="/productos/teclado" >Teclados y mouses</Link></li>
                        <li><Link to="/productos/parlante" >Parlantes y auriculares</Link></li>
                    </ul>
                    
            {/* <ul id="menuPpal">

                <li><Link to="/QuienesSomos">Quienes somos</Link></li>
                <li><Link to="/Productos">Nuestros productos</Link>              
                    <SubmenuNP />
                </li>
                <li><Link to="/Servicios">Nuestros servicios</Link>
                    <SubmenuNS />
                </li>
                <li><Link to="/ComoComprar">Cómo comprar</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul> */}

            <CartWidget />
        </header>
    )
}

export default NavBar;