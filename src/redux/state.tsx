import React from 'react';
export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubsriber: (state: stateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: stateType) => void) => void
}//типизация storage
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
    },//стейт
    getState: function () {
        return this._state;
    },//выдача стейта
    _callSubsriber: function (state: stateType) {
        console.log('state was changed')
    },
    addPost: function () {//добавление поста
        let newPosts = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPosts);
        this._state.profilePage.newPostText = '';
        this._callSubsriber(this._state);
    },
    updateNewPostText: function (newText: string) {//onChange
        this._state.profilePage.newPostText = newText
        this._callSubsriber(this._state);
    },
    subscribe: function (observer: (state: stateType) => void) {
        this._callSubsriber = observer;
    }//в index.tsx мы запустили эту функцию
    //мы передали сюда rerenderEntireTree(со стейтом внутри)
    //и сейчас _callSubsriber в котором левый мусор станет
    // rerenderEntireTree(со стейтом внутри)
}

export default store;
