import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {InArray} from "./components/Profile/MyPosts/MyPosts";
import {InMessagesDataType,InDialogDataType} from "./components/Dialogs/Dialogs";


let postData:Array<InArray>=[
    {id:1,message:'Hellow',likesCount:12},
    {id:2,message:'It\'s my first post!',likesCount:11}
]

const DialogData: Array<InDialogDataType> = [
    {id: 1, name: 'Igor'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Nadia'},
]
const MessagesData: Array<InMessagesDataType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hellow'},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} DialogData={DialogData} MessagesData={MessagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
