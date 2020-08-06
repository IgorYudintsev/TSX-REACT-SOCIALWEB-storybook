import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export let Profile = () => {
    return (
        <div className={'content'}>
            <div>ava+description</div>
            <MyPosts/>
        </div>

    )
}

