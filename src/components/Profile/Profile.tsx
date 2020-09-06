import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import store, {ActionsTypes} from "../../redux/state";

export type profileStateType = {
    profile: postDataType
    dispatch:(action:ActionsTypes)=>void
 }
type postDataType = {
    posts: Array<InArray>
    newPostText: string
}
export type InArray = {
    id: number
    message: string
    likesCount: number
}

export let Profile = (props: profileStateType) => {
    return (
        <div className={'content'}>
            <ProfileInfo/>
            <MyPosts
                postData={props.profile.posts}
                newPostText={props.profile.newPostText}
                dispatch={store.dispatch.bind(store)}
            />
        </div>
    )
}
