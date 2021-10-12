import "./SubmenuNS.css"
import {Link} from "react-router-dom"

const SubmenuNS = () =>{
    return(
        <>
        <ul id="submenuNS" className="submenu">
            <li><Link to="/asesoramiento">Asesoramiento</Link></li>
            <li><Link to="/propuestas_comerciales">Propuestas comerciales</Link></li>
            <li><Link to="/capacitacion">Capacitación</Link></li>
        </ul>
        </>
        );
}

export default SubmenuNS;