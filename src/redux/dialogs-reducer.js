const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';
//для того щоб перетворити if else у switch case, натиснути на ліхтарик над if
const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = {
                id: 5,
                message: state.newDialogText,
            };
            state.messages.push(newDialog);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogText = action.text;
            return state;
        default:
            return  state;
    }
}

export const AddDialog = () => ({type: ADD_DIALOG})
export const updateNewDialogText = (NewDialog) => ({type: UPDATE_NEW_DIALOG_TEXT, text: NewDialog})

export default dialogsReducer;