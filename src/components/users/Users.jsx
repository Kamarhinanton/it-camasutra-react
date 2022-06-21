import React from "react";
import classes from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
//стврорення обʼєктів за допомогою літерала обʼєкту let a = {name: 'Dima', age: 31}, та класів let a new Man('Dima', 31)

let Users = (props) => {

    let getUsers = () => {
        if(props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map(u => <div key = {u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small: userPhoto} className={classes.photo} alt="user"/>
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>country</div>
                            <div>city</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;