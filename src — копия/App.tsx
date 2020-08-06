import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Body} from "./components/Body/Body";


function App() {
    return (
        <BrowserRouter>
            <div className={'Wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route exact path='/' component={Body}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                </div>

                <div className={'Footer'}>Footer</div>
            </div>
        </BrowserRouter>

    );
}

//
// function App() {
//     return (
//         <BrowserRouter>
//             <div className="App">
//                 <Header/>
//                 <Nav/>
//                 {/*<Profile/>*/}
//
//                 <div className={'App-wraper-content'}>
//                     <Route exact path={'/'} component={Body}/>
//                     <Route  path={'/profile'} component={Profile}/>
//                     <Route path={'/dialogs'} component={Dialogs}/>
//
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// }

export default App;
