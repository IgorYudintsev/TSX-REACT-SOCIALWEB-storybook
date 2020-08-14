import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItems} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
//
// type DialogsItemsType = {
//     name: string
//     id: string
// }
//
// const DialogsItems = (props: DialogsItemsType) => {
//     let path = "/dialogs/" + props.id;
//     return (
//         <div className={classes.dialog + " " + classes.active}>
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>
//     )
// }
//
// type MessageType = {
//     message: string
// }
// const Message = (props: MessageType) => {
//     return (
//         <div className={classes.message}>{props.message}</div>
//     )
// }
//
type InDialogDataType = {
    id: number
    name: string
}
type InMessagesDataType = {
    id: number
    message: string
}

export const Dialogs = () => {
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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {DialogData.map(m =>
                    <DialogItems name={m.name} id={m.name}/>
                )}

            </div>
            <div className={classes.messages}>
                {MessagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
//=======================
// import React from 'react';
// import classes from './Dialogs.module.css';
// import {NavLink} from "react-router-dom";
//
// type DialogsItemsType = {
//     name: string
//     id: string
// }
//
// const DialogsItems = (props: DialogsItemsType) => {
//     let path = "/dialogs/" + props.id;
//     return (
//         <div className={classes.dialog + " " + classes.active}>
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>
//     )
// }
//
// type MessageType = {
//     message: string
// }
// const Message = (props: MessageType) => {
//     return (
//         <div className={classes.message}>{props.message}</div>
//     )
// }
//
// type InDialogDataType = {
//     id: number
//     name: string
// }
// type InMessagesDataType = {
//     id: number
//     message: string
// }
//
// export const Dialogs = () => {
//     const DialogData: Array<InDialogDataType> = [
//         {id: 1, name: 'Igor'},
//         {id: 2, name: 'Sasha'},
//         {id: 3, name: 'Nadia'},
//     ]
//     const MessagesData: Array<InMessagesDataType> = [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'How are you?'},
//         {id: 3, message: 'Hellow'},
//     ]
//     return (
//         <div className={classes.dialogs}>
//             <div className={classes.dialogsItem}>
//                 {DialogData.map(m =>
//                     <DialogsItems name={m.name} id={m.name}/>
//                 )}
//             </div>
//             <div className={classes.messages}>
//                 {MessagesData.map(m => <Message message={m.message}/>)}
//             </div>
//         </div>
//     )
// }
