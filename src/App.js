//App es el objeto React

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"


const App = ()=>{
    return(
        <>
            <NavBar />
            <main>
                <ItemListContainer/>
                <ItemDetailContainer/>
            </main>
        </>

    );
}

export default App