import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./Messageitem/MessageItem";
import {AddDialog, updateNewDialogText} from "../../redux/state";


const Dialogs = (props) => {
    let dialogsElements = [
        props.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} /> )
    ];
    let messagesElement = [
        props.dialogsPage.messages.map(message => <MessageItem message = {message.message} /> )
    ];
    let addDialog = () => {
        props.dispatch(AddDialog())
    }
    let onDialogChange = (e) => {
        let NewDialog = e.target.value;
        props.dispatch(updateNewDialogText(NewDialog))
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>
            </div>
            <div className={classes.content}>
                <textarea onChange={onDialogChange} value={props.dialogsPage.newDialogText}></textarea>
                <button onClick={addDialog}>add post</button>
                <button>remove post</button>
            </div>
        </div>
    )
}

export default Dialogs;