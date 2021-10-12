//App es el objeto React

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Cart from "./components/Cart/Cart"
import Order from "./components/Order/Order"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./Footer"
import ComoComprar from "./ComoComprar"
import QuienesSomos from "./QuienesSomos"
import Contacto from "./Contacto"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import React from "react"
import CartContext from "./components/CartContext/CartContext"
import "../src/styles/Styles.scss"
import Asesoramiento from "./Asesoramiento"
import Capacitacion from "./Capacitacion"
import PComerciales from "./PComerciales"


const App = ()=>{
    return(
        <BrowserRouter>
            <CartContext>
                    <NavBar />
                <main>
                    <Switch>
                        <Route path="/"  exact > <ItemListContainer /></Route>
                        <Route path="/productos/:id" exact> <ItemListContainer/> </Route>
                        <Route path="/Item/:id"  exact > <ItemDetailContainer /> </Route>
                        <Route path="/Cart" exact> <Cart /> </Route>
                        <Route path="/Order" exact> <Order /> </Route>
                        <Route path="/quienesSomos" exact><QuienesSomos /></Route>
                        <Route path="/asesoramiento" exact><Asesoramiento /></Route>
                        <Route path="/propuestas_comerciales" exact><PComerciales /></Route>
                        <Route path="/capacitacion" exact><Capacitacion /></Route>
                        <Route path="/comoComprar" exact><ComoComprar /></Route>
                        <Route path="/contacto" exact><Contacto /></Route>
                    </Switch>
                </main>
                <footer>
                    <Footer />
                </footer>
            </CartContext>
        </BrowserRouter>
    );
}

export default App