import React from 'react';
import {addPost, profileReducer, updateNewPostText} from "./profile-reducer";

export type storeType = {
    _state: stateType
    _callSubsriber: (state: stateType) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}
export type addPostActionType={
    type:'ADD-POST'
}
export type updateNewPostTextActionType={
    type:'UPDATE-NEW-POST-TEXT',
    newText:string
}
export type ActionsTypes=addPostActionType|updateNewPostTextActionType
export type stateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
}
export type messagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type profilePageType = {
    posts: Array<postsType>
    newPostText: string
}
export type postsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

// export const addPost = 'ADD-POST';
// export const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 10},
                {id: 2, message: 'How are you?', likesCount: 100}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yoo'},
                {id: 4, message: 'How are you?'},
                {id: 5, message: 'Yoo'},
            ],
            dialogs: [
                {id: 1, name: 'Dimach'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Igor'},
                {id: 4, name: 'Olga'},
                {id: 5, name: 'Nadzeika'},
            ]
        }
    },
    _callSubsriber: function (state: stateType) {
        console.log('state was changed')
    },
    subscribe: function (observer: (state: stateType) => void) {
        this._callSubsriber = observer;
    },
    getState: function () {
        return this._state;
    },
    dispatch: function (action) {
        profileReducer(store.getState(),action)
        this._callSubsriber(this._state)
    }
}


export default store;
