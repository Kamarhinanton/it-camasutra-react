import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
            newDialogText: 'hey, this is new dialog'
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
    //action обєкт у якого є type
    dispatch(action){
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogPage, action);
        this._callSubscriber(this._state);
    }
}
//якщо функція тільки щось повертає, можна використати скорочений запис без return, але якщо це обєкт то додати круглі скобки навколо фігурних

export default store;

window.store = store;
