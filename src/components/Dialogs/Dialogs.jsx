import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./Messageitem/MessageItem";
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';


const Dialogs = (props) => {
    let dialogsElements = [
        //key={dialog.id} щоб не було помилки key, у map завжди пторібно ставити атрибут key
        props.dialogPage.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} /> )
    ];
    let messagesElement = [
        props.dialogPage.messages.map(message => <MessageItem key={message.id} message = {message.message} /> )
    ];

    let onAddDialog = () => {
        props.AddDialog()
    }

    let onDialogChange = (e) => {
        let body = e.target.value;
        props.updateNewDialog(body)
    };

    //redirect з використанням хуків(navigate)

    let navigate = useNavigate()

    useEffect(()=>{
        if(props.isAuth === false){
            return navigate("../login")
        }
    }, [props.isAuth])

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
                <textarea onChange={onDialogChange} value={props.dialogPage.newDialogText}></textarea>
                <button onClick={onAddDialog}>add post</button>
                <button>remove post</button>
            </div>
        </div>
    )
}

export default Dialogs;