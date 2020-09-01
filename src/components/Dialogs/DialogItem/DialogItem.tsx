import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemsType = {
    name: string
    id: string
}
type InDialogDataType = {
    id: number
    name: string
}

export const DialogItems = (props: DialogsItemsType) => {
    let path = "/dialogs/" + props.id;
     return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}






