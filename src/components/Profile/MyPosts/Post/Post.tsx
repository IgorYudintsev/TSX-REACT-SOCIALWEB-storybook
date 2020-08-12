import React from "react";
import classes from './Post.module.css';
import avatar from './../../../img/avatar.png'

type messageType = {
    message: string
    likesCount:number
}

export let Post = (props: messageType) => {
    return (
        <div className={'posts'}>
            <div className={classes.item}>
                <img src={avatar}/>
                {props.message}
            </div>
            <div>Like:{props.likesCount}</div>
        </div>
    )
}

