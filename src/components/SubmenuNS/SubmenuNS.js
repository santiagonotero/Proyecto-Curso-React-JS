import "./SubmenuNS.css"
import {Link} from "react-router-dom"

const SubmenuNS = () =>{
    return(
        <>
        <ul id="submenuNS">
            <li><Link to="#">Asesoramiento</Link></li>
            <li><Link to="#">Propuestas comerciales</Link></li>
            <li><Link to="#">Capacitación</Link></li>
        </ul>
        </>
        );
}

export default SubmenuNS;