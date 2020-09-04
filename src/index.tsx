import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, stateType, subscribe, updateNewPostText} from './redux/state'
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";


let rerenderEntireTree=(state:stateType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);









serviceWorker.unregister();