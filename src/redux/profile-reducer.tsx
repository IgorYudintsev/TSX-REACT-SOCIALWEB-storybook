import React from 'react';
import store, {stateType, ActionsTypes} from "./state";

export const addPost = 'ADD-POST';
export const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: stateType, action: ActionsTypes) => {
    switch (action.type) {//заворачиваем в кейсы вместо if else
        case "ADD-POST":
            let newPosts = {
                id: 5,
                message: store.getState().profilePage.newPostText,
                likesCount: 0
            };
            store.getState().profilePage.posts.push(newPosts);
            store.getState().profilePage.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            store.getState().profilePage.newPostText = action.newText
            return state;
        default:
            return state;
    }
}
//переносим из state.tsx
export const addPostActionCreator = () => {
    return {
        type: addPost
    }as const
}
export const updateNewPostActionCreator = (text: string) => {
    return {
        type: updateNewPostText,
        newText: text
    }as const
}