//App es el objeto React

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"


const App = ()=>{
    return(
        <>
            <NavBar />
            <main>
                <ItemListContainer/>
            </main>
        </>

    );
}

export default App