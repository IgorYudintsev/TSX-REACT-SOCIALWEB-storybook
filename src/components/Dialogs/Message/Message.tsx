import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


type MessageType = {
    message: string
}
type InMessagesDataType = {
    id: number
}


export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

