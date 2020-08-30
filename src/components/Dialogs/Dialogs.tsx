import React from 'react';
import classes from './Dialogs.module.css';

import {DialogItems} from './DialogItem/DialogItem'
import {Message} from './Message/Message'

export type dialogsStateType = {
    state: generalType
}

export type generalType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

export const Dialogs = (props: dialogsStateType) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {props.state.dialogs.map(m =>
                    <DialogItems name={m.name} id={m.name}/>
                )}
            </div>
            <div className={classes.messages}>
                {props.state.messages.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
//=======================
// import React from 'react';
// import classes from './Dialogs.module.css';
//
// import {DialogItems} from './DialogItem/DialogItem'
// import {Message} from './Message/Message'
//
// export type generalType = {
//     MessagesData: Array<MessagesType>
//     DialogData: Array<DialogsType>
// }
//
// export type MessagesType = {
//     id: number
//     message: string
// }
// export type DialogsType = {
//     id: number
//     name: string
// }
//
// export const Dialogs = (props: generalType) => {
//
//     return (
//         <div className={classes.dialogs}>
//             <div className={classes.dialogsItem}>
//                 {props.DialogData.map(m =>
//                     <DialogItems name={m.name} id={m.name}/>
//                 )}
//
//             </div>
//             <div className={classes.messages}>
//                 {props.MessagesData.map(m => <Message message={m.message}/>)}
//             </div>
//         </div>
//     )
// }