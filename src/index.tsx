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
                     addPost={store.addPost.bind(store)}//bind-следит за this
                     updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());//запускаем перерисовку->т.е. стр.9
store.subscribe(rerenderEntireTree);//отправляет rerenderEntireTree в state.tsx
//чтобы там можно было перезагрузить rerenderEntireTree из state.tsx


serviceWorker.unregister();