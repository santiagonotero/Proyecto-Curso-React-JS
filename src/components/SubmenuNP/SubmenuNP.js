import React from "react";
import "./SubmenuNP.css"
import {Link} from "react-router-dom"


const SubmenuNP = () =>{
    
    return(

        <ul id="submenuNP" className="submenu">
            <li><Link to="/productos/computadora">Computadoras de escritorio</Link></li>
            <li><Link to="/productos/notebook" >Notebooks</Link></li>
            <li><Link to="/productos/monitor" >Monitores</Link></li>
            <li><Link to="/productos/disco_rigido" >Discos rígidos</Link></li>
            <li><Link to="/productos/Memoria_RAM" >Memorias RAM</Link></li>
            <li><Link to="/productos/teclado" >Teclados y mouses</Link></li>
            <li><Link to="/productos/parlante" >Parlantes y auriculares</Link></li>
        </ul>
        );
}

export default SubmenuNP;