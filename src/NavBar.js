

const NavBar=() =>{

    return(
        <header>
            <h1 id="titulo">E-commerce</h1>
            <ul id="menuPpal">
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Nuestros productos</a>
                    <ul id="submenuNP">
                        <li><a href="#">Notebooks</a></li>
                        <li><a href="#">Computadoras de escritorio</a></li>
                        <li><a href="#">Monitores</a></li>
                        <li><a href="#">Discos rígidos</a></li>
                        <li><a href="#">Memorias RAM</a></li>
                        <li><a href="#">Teclados y mouses</a></li>
                        <li><a href="#">Parlantes y auriculares</a></li>
                    </ul>
                </li>
                <li><a href="#">Nuestros servicios</a>
                <ul id="submenuNS">
                        <li><a href="#">Asesoramiento</a></li>
                        <li><a href="#">Propuestas comerciales</a></li>
                        <li><a href="#">Capacitación</a></li>
                    </ul>
                </li>
                <li><a href="#">Cómo comprar</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            
        </header>
    )
}

export default NavBar