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
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    <DialogItem name="anton" id="1"/>
                    <DialogItem name="Ira" id="2"/>
                    <DialogItem name="Matvey" id="3"/>
                    <DialogItem name="Andrey" id="4"/>
                    <DialogItem name="Lena" id="5"/>
                    <DialogItem name="Ehor" id="6"/>
                </div>
                <div className={classes.messages}>
                    <Message message = "hi"/>
                    <Message message = "how are you"/>
                    <Message message = "what is up"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;