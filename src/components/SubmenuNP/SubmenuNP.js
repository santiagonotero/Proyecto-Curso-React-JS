import React from "react";
import "./SubmenuNP.css"
import {BrowserRouter, Link, Switch} from "react-router-dom"

const SubmenuNP = () =>{
    return(
            <BrowserRouter>
                <Switch>

                    <ul id="submenuNP">
                        <li><Link to="/productos/computadora">Computadoras de escritorio</Link></li>
                        <li><Link to="/productos/notebook" >Notebooks</Link></li>
                        <li><Link to="/productos/monitor" >Monitores</Link></li>
                        <li><Link to="/productos/disco_rigido" >Discos rígidos</Link></li>
                        <li><Link to="/productos/memoria_ram" >Memorias RAM</Link></li>
                        <li><Link to="/productos/teclado" >Teclados y mouses</Link></li>
                        <li><Link to="/productos/parlante" >Parlantes y auriculares</Link></li>
                    </ul>

                </Switch>

            </BrowserRouter>
        );
}

export default SubmenuNP;