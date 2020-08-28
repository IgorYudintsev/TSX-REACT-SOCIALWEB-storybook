import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Body} from "./components/Body/Body";

type generalType={
    postData: Array<InArray>
    DialogData:Array<InDialogDataType>
    MessagesData:Array<InMessagesDataType>
}

 type InDialogDataType = {
    id: number
    name: string
}
 type InMessagesDataType = {
    id: number
    message: string
}


export type InArray = {
    id: number
    message: string
    likesCount: number
}


function App(props:generalType) {

    return (
        <BrowserRouter>
            <div className={'Wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route exact path='/' component={Body}/>
                    {/*<Route path='/dialogs' component={() => <Dialogs />}/>*/}
                    <Route path='/dialogs' component={() => <Dialogs DialogData={props.DialogData} MessagesData={props.MessagesData}/>}/>
                    {/*<Route path='/profile' component={() => <Profile postData={props.postData}/>}/>*/}
                    <Route path='/profile' component={() => <Profile postData={props.postData}/>}/>
                </div>
                <div className={'Footer'}>Footer</div>
            </div>
        </BrowserRouter>
    );
}

export default App;

//========================================
// import React from 'react';
// import {Route, BrowserRouter} from 'react-router-dom'
// import './App.css';
// import {Header} from "./components/Header/Header";
// import {Navbar} from "./components/Navbar/Navbar";
// import {Profile} from "./components/Profile/Profile";
// import {Dialogs} from "./components/Dialogs/Dialogs";
// import {Body} from "./components/Body/Body";
// import {InArray} from "./components/Profile/MyPosts/MyPosts";
//
// function App() {
//     let postData:Array<InArray>=[
//         {id:1,message:'Hellow',likesCount:12},
//         {id:2,message:'It\'s my first post!',likesCount:11}
//     ]
//     return (
//         <BrowserRouter>
//             <div className={'Wrapper'}>
//                 <Header/>
//                 <Navbar/>
//                 <div className={'app-wrapper-content'}>
//                     <Route exact path='/' component={Body}/>
//                     <Route path='/dialogs' component={() => <Dialogs/>}/>
//                     <Route path='/profile' component={() => <Profile postData={postData}/>}/>
//                 </div>
//                 <div className={'Footer'}>Footer</div>
//             </div>
//         </BrowserRouter>
//     );
// }
//
// export default App;