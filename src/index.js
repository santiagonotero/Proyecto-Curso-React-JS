// Se define la variable 'react' en scope

import React from "react";

// Se define la variable 'ReactDOM' en scope
import ReactDOM from "react-dom";

//Definimos nuestro elemento de React

import App from "./App"

// Agregamos una hoja de estilos al proyecto

import "./estilos.css"

// Aquí tenemos nuestra función render corriendo

ReactDOM.render(<App />, document.getElementById('root'))