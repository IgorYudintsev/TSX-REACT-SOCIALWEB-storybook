import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='Igor' id={'1'}/>
                <DialogItem name='Sasha' id={'2'}/>
                <DialogItem name='Nadia' id={'3'}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Hellow'}/>
            </div>
        </div>
    )
}