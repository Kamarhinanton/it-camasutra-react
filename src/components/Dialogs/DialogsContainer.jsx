import React from 'react';
import {AddDialog, updateNewDialogText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store)=> {
                    let state = store.getState().dialogPage;

                    let addDialog = () => {
                        store.dispatch(AddDialog())
                    }
                    let onDialogChange = (e) => {
                        let NewDialog = e.target.value;
                        store.dispatch(updateNewDialogText(NewDialog))
                    }
                    return <Dialogs
                        dialogs={state.dialogs}
                        messages={state.messages}
                        AddDialog={addDialog}
                        onDialogChange={onDialogChange}
                        newDialogText = {state.newDialogText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;