#React JS Ecommerce

## Resumen del proyecto

Se trata de un sitio de eCommerce basado en React JS y Firebase. Es decir, React JS se encarga de la parte visual del sitio web mientras que los datos de los artículos en venta están almacenados en Firebase.
El menú de navegación incorpora un carrito de compras y un menú desplegable en donde los artículos se separan por categorías, además de la información típica de cualquier sitio web (Quienes somos, Contacto, etc).
El sitio permite exhibir listados de productos de manera resumida y separados por categorías. También permite mostrar un producto en detalle y agregar una o varias unidades de ese producto al carrito.
En la parte del carrito de compras se puede ver un listado detallado de los productos agregados, e incluso se pueden eliminar productos en caso de que el cliente cambie de idea y ya no quiera comprarlos.
Por último, el sitio permite generar la orden de compra tomando los datos de contacto del cliente y almacenando esta información, junto con los productos a comprar, en la base de datos de Firebase.

## Instalación 

Este proyecto está almacenado en el repositorio Github, más precisamente en el siguiente repositorio:

```
https://github.com/santiagonotero/Proyecto-Curso-React-JS
```
Aquí vamos a indicar cómo clonar un repositorio en la computadora local usando los comandos de Github.

####Clonando repositorio

1. Primero hay que abrir una ventana de terminal en nuestra computadora. Esta puede abrirse desde algún software terminal que haya en nuestra computadora o desde algún entorno de programación como Visual Studio Code.
2. Ya en nuestra ventana terminal nos posicionamos sobre la carpeta en donde queremos instalar el proyecto.
3. Una vez posicionados, escribimos el siguiente comando:

````
git clone https://github.com/santiagonotero/Proyecto-Curso-React-JS
````
4. Presionamos **Enter** y esperamos a que la instalación finalice.

Y listo. Ya tenemos instalada una ccopia en nuestra máquina.

## Descripción del proyecto

####Artículos en venta

Si hace clic en el logo de la marca, se exhibe la información simplificada de todos los artículos disponibles en el sitio. Esta información consiste en una foto reducida del producto, tipo de producto, marca, cantidad disponible en stock, un link con la leyenda "Más información" y el precio. Este último se muestra con una tipografía de mayor tamaño y en color verde.
Si se pasa el cursor del mouse sobre la opción de menú "Nuestros productos" se despliega un submenú con las diferentes categorías de productos. Al hacer clic en cualquiera de las categorías el sitio hace otra consulta a la base de datos solicitando los productos que entren dentro de dicha categoría. Si no hay productos que cumplan esos requisitos se muestra la leyenda "Sin stock".

####Detalles de los artículos

Al hacer clic en el link "Más información" en cualquiera de los productos en pantalla, se exhibe un cuadro con información detallada del producto en cuestión. La foto del producto es más detallada, y además de la información exhibida en el modo simplificado se agrega una descripción del producto. También hay un contador tres botones, dos para aumentar o disminuir la cantidad de productos que se van a agregar al carrito y un tercero para agregar dichos productos al carrito. la cantidad de productos que se pueden agregar al carrito va de 0 hasta el stock máximo disponible.
Una vez que se hace clic en el botón "Agregar al carrito" estos tres botones y contador desaparecen y se sustituyen por otro botón "Terminar compra". Al hacer clic en él, el sitio nos redirige a la página "/Cart" en donde aparece el detalle de todos los productos que agregamos a nuestro carrito.

####Carrito de Compras

Se puede acceder a esta página de tres maneras distintas:
1. Agregando "/Cart" a continuación de la dirección del sitio en la barra del navegador.
2. Haciendo clic en el ícono del carrito, en la parte superior derecha del menú de navegación.
3. Haciendo clic en el botón "Terminar compra", una vez que se elige ver un producto en detalle y se agregan artículos al carrito.

En esta página se exhiben en forma de tabla todos los productos agregados a nuestro carrito. Los productos están separados en cada fila de la tabla según su tipo. Cada fila muestra el detalle del producto, el precio unitario, la cantidad agregada al carrito de dicho producto, el subtotal (precio unitario * cantidad agregada) y por último un botón "Eliminar", que permite quitar esos productos del carrito.
Debajo de la tabla se muestra el total a abonar, que resulta de la sumatoria de todos los subtotales.
Por último está el botón "Continuar compra", que nos lleva a la página donde se solicitan los datos del comprador para poder armar el pedido.

####Continuar compra
Esta página consiste en tres campo de texto para completar con los datos de contacto del comprador (Nombre, teléfono y E-mail) y un botón para enviar. Una vez que se completan los campos requeridos y se hace clic en "Enviar" se genera la orden, la cual es almacenada en la base de datos. Esta orden consta de los datos del comprador más la información de los productos comprados. Una vez finalizado todo este proceso, se le avisa al usuario que su orden fue generada con éxito por medio de una alerta en el navegador.

##Convenciones

Aquí se pretende explicar cómo está estructurado el proyecto, a fin de poder modificar, adaptar o mejorar el contenido de los archivos para poder adaptarlo a las necesidades de cada uno. 

####Carpeta src

Todos los archivos del proyecto están dentro de la carpeta **src**. Dentro de la subcarpeta **components** están todos los componentes que hacen a la funcionalidad del sitio.
En **src** están los archivos que contienen la información de las páginas que contienen información estática del sitio, tales como "Quienes somos", "Contacto", etc.
Además están los archivos que contienen los fragmentos de páginas que se repiten en todo el sitio, tales como el footer, los datos para comunicarse con la base de datos, la hoja de estilos y las imágenes estáticas.

####Subcarpeta components
Los componentes que hacen a la funcionalidad del sitio están contenidos dentro de esta carpeta. Dentro de estos componentes están:
1- La barra de menú (NavBar).
2- Los submenues (SubmenuNP y SubmenuNP).
3- La estructura en donde se muestran los datos del producto (ItemDetail e Item).
4- Las funciones que solicitan datos de los productos a la base de datos (ItemListContainer e ItemDetailContainer).

Entre otros...


