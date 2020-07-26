import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import classes from "*.module.css";

function App() {
    return (
        <div className={'Wrapper'}>
            <Header/>
            <Navbar/>
            {/*<Profile/>*/}

            <div className={'app-wrapper-content'}><Dialogs/></div>
            <div className={'Footer'}>Footer</div>

        </div>
    );
}


export default App;
