import React, {useEffect, useState} from "react";

// let arr = [0, ()=> {}];
//у arr забираємо 1 значення та присвоюємо у a, а друге значення присвоюємо у setA
// let [a, setA] = arr;
//a =0, setA = ()=> {},

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    // рівнозначно:
    //let editMode = stateWithSetState [0];
    //let setEditMode = stateWithSetState [1];

    let [status, setStatus] = useState(props.status);


    //повідомляємо react що ми залежні від props status, відмальовка буде відбуватись при зміні цієї залежності
    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode} >{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusHooks;