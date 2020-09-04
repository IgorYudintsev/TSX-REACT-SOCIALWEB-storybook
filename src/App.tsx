import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Body} from "./components/Body/Body";
import {stateType} from "./redux/state";

type appStateType = {
    state: stateType
    addPost:()=>void
    updateNewPostText:(newText: string)=>void
}

function App(props: appStateType) {
    return (
        <div className={'Wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route exact path='/' component={Body}/>
                <Route path='/dialogs'
                       component={() => <Dialogs
                           state={props.state.dialogsPage}
                       />
                       }/>
                <Route path='/profile' component={() => <Profile
                    profile={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                />}/>
            </div>
            <div className={'Footer'}>Footer</div>
        </div>
    );
}

export default App;
