import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.css";


const ItemListContainer = ()=>{

    return(
        <div className="CountContainer">
            {/* <ItemCount stock={5} initial={1} onAdd{... () => {}}/> */}
            <ItemList />
        </div>
    );
}

export default ItemListContainer;