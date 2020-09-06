import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {stateType} from './redux/state'
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

let rerenderEntireTree=(state:stateType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                    //вместо AddPost и updateNewPostText
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



serviceWorker.unregister();