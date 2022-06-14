import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./Messageitem/MessageItem";


const Dialogs = (props) => {
    let dialogsElements = [
        props.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} /> )
    ];
    let messagesElement = [
        props.messages.map(message => <MessageItem message = {message.message} /> )
    ];
    let onAddDialog = () => {
        props.AddDialog()
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
                <textarea onChange={props.onDialogChange} value={props.newDialogText}></textarea>
                <button onClick={onAddDialog}>add post</button>
                <button>remove post</button>
            </div>
        </div>
    )
}

export default Dialogs;