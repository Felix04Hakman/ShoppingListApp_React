import React, {useState} from 'react';
import './sass/main.scss';
import {NewItemForm} from "./components/NewItemForm";
import {Header} from "./components/Header";
import {Product} from "./models/Product";
import {ItemsList} from "./components/ItemsList";

function App() {
    const [item,setItems] = useState<Product[]>([]);

    const addProduct = (product:Product)=>{
        setItems([...item,product]);
    }

    return(
        <div className="App">
            <Header/>

            <NewItemForm addProductFn = {addProduct} />
        </div>
    );
}

export default App;
