//App es el objeto React

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Route, Switch} from "react-router-dom"


const App = ()=>{
    return(
        <BrowserRouter>
                <NavBar />
            <main>
                {/* <ItemListContainer/>
                <ItemDetailContainer/> */}
            
            <Switch>
                <Route path="/"  exact > <ItemListContainer /></Route>
                <Route path="/productos/:id" exact> <ItemListContainer/> </Route>
                <Route path="/Item/:id"  exact > <ItemDetailContainer /> </Route>
            </Switch>
            
            </main>
        </BrowserRouter>
    );
}

export default App