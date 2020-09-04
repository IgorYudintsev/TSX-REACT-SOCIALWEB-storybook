
import React from 'react';

let rerenderEntireTree=(state: stateType)=>{
    console.log('state was changed')
}

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

let state: stateType = {
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
}

export let addPost = () => {
    let newPosts = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0};
    state.profilePage.posts.push(newPosts);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText=newText
    rerenderEntireTree(state);
}
export const subscribe=(observer:(state: stateType)=>void)=>{
    rerenderEntireTree=observer;
}

export default state;