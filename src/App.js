//App es el objeto React

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Cart from "./components/Cart/Cart"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import React from "react"
import CartContext from "./components/CartContext/CartContext"
import "./estilos.css"


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
                    </Switch>
                </main>
            </CartContext>
        </BrowserRouter>
    );
}

export default App