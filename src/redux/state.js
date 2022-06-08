let store = {
    _state : {
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
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        debugger;
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                counts: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if( action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state)
        }
    }
}

export default store;

window.store = store;
