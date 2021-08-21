import ItemCount from "../ItemCount/ItemCount";

import "./ItemListContainer.css"
const ItemListContainer = ()=>{

    return(
        <div className="CountContainer">
            <ItemCount stock={5} initial={1} onAdd{... () => {}}/>
        </div>
    );
}

export default ItemListContainer;