import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./Messageitem/MessageItem";


const Dialogs = (props) => {
    let dialogsElements = [
        props.dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} /> )
    ];
    let messagesElement = [
        props.messages.map(message => <MessageItem message = {message.message} /> )
    ]
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
        </div>
    )
}

export default Dialogs;