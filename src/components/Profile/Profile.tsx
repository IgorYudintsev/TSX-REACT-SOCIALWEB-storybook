import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type profileStateType = {
    profile: postDataType
    addPost: () => void
    updateNewPostText:(newText: string)=>void
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
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
