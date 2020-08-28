import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type postDataType = {
    postData: Array<InArray>
}
export type InArray = {
    id: number
    message: string
    likesCount: number
}

export let Profile = (props:postDataType) => {
    return (
        <div className={'content'}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>

    )
}
