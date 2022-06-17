const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let initialState = {
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

//для того щоб перетворити if else у switch case, натиснути на ліхтарик над if
const dialogsReducer = (state=initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_DIALOG_TEXT:{
            // stateCopy = {...state};
            // stateCopy.newDialogText = action.text;
            //скорочений варіант див.:
            stateCopy = {
                ...state,
                newDialogText : action.text
            //    одразу перезатерли newDialogText
            };
            return stateCopy;
        }
        case ADD_DIALOG: {
            // let stateCopy = {
            // ...state,
            // messages: [...state.messages]
            // }
            let body = state.newDialogText;
            stateCopy = {
                ...state,
                newDialogText : '',
                //... -спред оператор
                messages : [...state.messages, {id: 5, message: body}]
            };
            return stateCopy;
        }
        default:
            return  state;
    }
}

export const AddDialog = () => ({type: ADD_DIALOG})
export const updateNewDialogText = (NewDialog) => ({type: UPDATE_NEW_DIALOG_TEXT, text: NewDialog})

export default dialogsReducer;