import React from 'react';
import {AddDialog, updateNewDialogText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let addDialog = () => {
        props.store.dispatch(AddDialog())
    }
    let onDialogChange = (e) => {
        let NewDialog = e.target.value;
        props.store.dispatch(updateNewDialogText(NewDialog))
    }

    return (
        <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            AddDialog={addDialog}
            onDialogChange={onDialogChange}
            newDialogText = {state.newDialogText}
        />
    )
}

export default DialogsContainer;