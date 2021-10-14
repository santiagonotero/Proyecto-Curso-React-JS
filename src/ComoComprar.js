import React from "react";

const ComoComprar=()=>{

    
    return(

        <div className="mainContainer">
            <h1 className="centeredText">Cómo comprar</h1>
            <p>¿Es tu primera vez comprando online en nuestro sitio? No te sientas mal. Todos pasamos por lo mismo. Acá te lo explicamos:</p>
            <ol>
                <p><li>Pasá el cursor del mouse sobre la opción Nuestros Productos en el menú de arriba. Ahí se te va a desplegar un submenú con las diferentes 
                    categorías de productos (computadoras, notebooks, etc.).
                </li></p>
                <p><li>Una vez que elijas la categoría de productos que te interesa haciendo clic sobre ella, se van a mostrar los diferentes productos que 
                    cumplan con dicha categoría. Haciendo clic en un producto en particular se muestra dicho producto en detalle.
                </li></p>
                <p><li>Si ese producto te interesa podés agregarlo al carrito de compra. Podés agregar la cantidad de productos que desees  siempre que haya 
                    stock disponible.</li></p>
                <p><li>Cuando hagas clic en el botón "Agregar al carrito", éste va a desaparecer y va a aparecer otro llamado "Terminar compra".
                </li></p>
                <p><li>Si querés seguir comprando productos, volvé a Nuestros Productos y repetí el proceso anterior. Sino hacé clic en Terminar Compra (o hacé clic 
                en el ícono del carrito en la barra de menú) y vas a poder ver el detalle de los productos que agregaste al carrito junto con el detalle del precio de 
                cada uno y el importe total pagar.
                </li></p>
                <p><li>Si querés eliminar algún artículo del carrito, hacé clic en el botón Eliminar en la fila correspondiente del artículo en cuestión. Una vez listo 
                    hacé clic en Ir a Página de Pagos.</li></p>
                <p><li>En la página de pagos hay un formulario con tus datos de contacto. Es importante que lo completes bien para que sepamos dónde enviar tu pedido. Luego de completado hacé clic en Enviar y 
                listo!!! Tu orden ya fue generada. </li></p>
            </ol>
            <div className="areaFill" />
            <div className="areaFill" />
        </div>

    );
}

export default ComoComprar