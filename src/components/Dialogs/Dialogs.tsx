import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItems} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {InArray} from "../../App";

type generalType = {
    DialogData: Array<InDialogDataType>
    MessagesData: Array<InMessagesDataType>
}
export type InDialogDataType = {
    id: number
    name: string
}
export type InMessagesDataType = {
    id: number
    message: string
}

export const Dialogs = (props: generalType) => {
    // const DialogData: Array<InDialogDataType> = [
    //     {id: 1, name: 'Igor'},
    //     {id: 2, name: 'Sasha'},
    //     {id: 3, name: 'Nadia'},
    // ]
    // const MessagesData: Array<InMessagesDataType> = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'How are you?'},
    //     {id: 3, message: 'Hellow'},
    // ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.DialogData.map(m =>
                    <DialogItems name={m.name} id={m.name}/>
                )}

            </div>
            <div className={classes.messages}>
                {props.MessagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
//=======================
// import React from 'react';
// import classes from './Dialogs.module.css';
// import {NavLink} from "react-router-dom";
// import {DialogItems} from './DialogItem/DialogItem'
// import {Message} from './Message/Message'
// import {InArray} from "../../App";
//
// type generalType = {
//     DialogData: Array<InDialogDataType>
//     MessagesData: Array<InMessagesDataType>
// }
// type InDialogDataType = {
//     id: number
//     name: string
// }
// type InMessagesDataType = {
//     id: number
//     message: string
// }
//
// export const Dialogs = (props: generalType) => {
//     // const DialogData: Array<InDialogDataType> = [
//     //     {id: 1, name: 'Igor'},
//     //     {id: 2, name: 'Sasha'},
//     //     {id: 3, name: 'Nadia'},
//     // ]
//     // const MessagesData: Array<InMessagesDataType> = [
//     //     {id: 1, message: 'Hi'},
//     //     {id: 2, message: 'How are you?'},
//     //     {id: 3, message: 'Hellow'},
//     // ]
//     return (
//         <div className={classes.dialogs}>
//             <div className={classes.dialogsItem}>
//                 {DialogData.map(m =>
//                     <DialogItems name={m.name} id={m.name}/>
//                 )}
//
//             </div>
//             <div className={classes.messages}>
//                 {MessagesData.map(m => <Message message={m.message}/>)}
//             </div>
//         </div>
//     )
// }