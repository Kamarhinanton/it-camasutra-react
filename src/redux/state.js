const ADD_POST = 'ADD-POST';
const ADD_DIALOG = 'ADD-DIALOG';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

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
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                counts: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if( action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state)
        } else if( action.type === ADD_DIALOG){
            let newDialog = {
                id: 5,
                message: this._state.dialogPage.newDialogText,
            };
            this._state.dialogPage.messages.push(newDialog);
            this._state.dialogPage.newDialogText = '';
            this._callSubscriber(this._state)
        } else if( action.type === UPDATE_NEW_DIALOG_TEXT){
            this._state.dialogPage.newDialogText = action.text;
            this._callSubscriber(this._state)
        }
    }
}
//якщо функція тільки щось повертає, можна використати скорочений запис без return, але якщо це обєкт то додати круглі скобки навколо фігурних
export const AddPost = () => ({type: ADD_POST})
export const AddDialog = () => ({type: ADD_DIALOG})


export const updateNewPostText = (NewText) => ({type: UPDATE_NEW_POST_TEXT, text: NewText})
export const updateNewDialogText = (NewDialog) => ({type: UPDATE_NEW_DIALOG_TEXT, text: NewDialog})

export default store;

window.store = store;
