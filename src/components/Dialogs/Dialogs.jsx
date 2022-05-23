import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
 return (
     <div className={classes.dialog + ' ' + classes.active}>
         <NavLink to={path}>
             {props.name}
         </NavLink>
     </div>
 )
}

const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Ira'},
        {id: 3, name: 'Matvey'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Lena'},
        {id: 6, name: 'Ehor'}
    ] ;
    let messages= [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you'},
        {id: 3, message: 'what is up'},
    ];
    let dialogsElements = [
        dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> )
    ];
    let messagesElement = [
        messages.map(message => <Message message = {message.message} /> )
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