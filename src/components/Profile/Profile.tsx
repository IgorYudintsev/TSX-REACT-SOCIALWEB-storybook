import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {generalType} from "../Dialogs/Dialogs";

export type profileStateType = {
    state: postDataType
}
type postDataType = {
    posts: Array<InArray>
}
export type InArray = {
    id: number
    message: string
    likesCount: number
}

export let Profile = (props:profileStateType) => {
    return (
        <div className={'content'}>
            <ProfileInfo/>
            <MyPosts postData={props.state.posts}/>
        </div>
    )
}
