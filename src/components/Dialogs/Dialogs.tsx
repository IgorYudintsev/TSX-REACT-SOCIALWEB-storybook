import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='Igor' id={'1'}/>
                {/*<div className={classes.dialog +" "+classes.active}>*/}
                {/*    <NavLink to="/dialogs/1">Igor</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.dialog}>*/}
                {/*    <NavLink to="/dialogs/2">Sasha</NavLink>*/}
                {/*</div>*/}
                {/*<div className={classes.dialog}>*/}
                {/*    <NavLink to="/dialogs/3">Nadia</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Hellow</div>
            </div>
        </div>
    )
}