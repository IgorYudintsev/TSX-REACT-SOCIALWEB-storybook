import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export let Profile = () => {
    return (
        <div className={'content'}>
            <ProfileInfo/>

            <MyPosts/>
        </div>

    )
}

