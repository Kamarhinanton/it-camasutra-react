import React from "react";
import classes from './users.module.css'

let Users = (props) => {
    //при підгрузці юзерів щоб не зациклилось:
    if(props.users.length === 0){
        props.setUsers ([
            {id : 1, photoUrl:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png', followed: true, fullName: 'Anton', status:'programmer', location: {city: 'Khmelnitskyi', country: 'Ukraine'}},
            {id : 2, photoUrl:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png', followed: false, fullName: 'Ehor', status:'Chef', location: {city: 'Kyiv', country: 'Ukraine'}},
            {id : 3, photoUrl:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png', followed: true, fullName: 'Matviy', status:'Barist', location: {city: 'California', country: 'USA'}}
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key = {u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.photo} alt="user"/>
                        </div>
                        <div>
                            {
                                u.followed
                                ?  <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                                :  <button onClick={()=> {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;