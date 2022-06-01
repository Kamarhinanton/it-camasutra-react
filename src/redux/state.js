import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts : [
            {id : 1, message: 'Hi, how are you', counts: 5 },
            {id: 2, message: 'Hey you', counts: '23' }],
        newPostText : 'hello, Anton',
    },
    dialogPage:{
        dialogs: [
            {id: 1, name: 'Anton'},
            {id: 2, name: 'Ira'},
            {id: 3, name: 'Matvey'},
            {id: 4, name: 'Andrey'},
            {id: 5, name: 'Lena'},
            {id: 6, name: 'Ehor'}
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how are you'},
            {id: 3, message: 'what is up'},
        ],
    }
}

window.state = state


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        counts: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
}

export let updatePostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state)
}


// export let updateNewPostTex = (newText) => {
//     state.profilePage
// }

export default state;