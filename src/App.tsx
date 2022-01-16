import React from 'react';
import './sass/main.scss';
import {NewItemForm} from "./components/NewItemForm";
import {Header} from "./components/Header";


function App() {
    return (<>
        <div className="App">
            <Header/>
            <NewItemForm/>
        </div>
    </>);
}

export default App;
