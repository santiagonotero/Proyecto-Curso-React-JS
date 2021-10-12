import React, { useEffect, useState } from "react"
import '../../styles/Styles.scss';
//import {companyLogo} from '../../images/logo.png'
//import {submenuNP, submenuNS} from "./Submenu"
import CartWidget from "../CartWidget/CartWidget"
import SubmenuNP from "../SubmenuNP/SubmenuNP"
import SubmenuNS from "../SubmenuNS/SubmenuNS"
import {Link, useParams} from "react-router-dom"

import logo from '../../Images/Sources/logo.svg'


const NavBar=() =>{

    return(
        <header>
            <div className="navContainer">
                <div id="navLogo">
                    <Link to="/" ><img src={logo} alt="Logo" /></Link>
                </div>       
                <ul id="menuPpal">
                    <li key="1"><Link to="/quienesSomos">Quienes somos</Link></li>
                    <li key="2" ><Link to="#">    Nuestros Productos </Link>
                        <SubmenuNP />
                    </li>
                    <li key="3"><Link to="#">Nuestros servicios</Link>
                        <SubmenuNS />
                    </li>
                    <li key="4"><Link to="/comoComprar">Cómo comprar</Link></li>
                    <li key="5"><Link to="/contacto">Contacto</Link></li>
                </ul>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;

//{</ul>onMouseEnter={() => setMenuNPDesplegado(true)} onMouseLeave={() => setMenuNPDesplegado(false)}