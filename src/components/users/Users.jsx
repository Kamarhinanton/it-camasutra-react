import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];


    //для відображення усіх сторінкок написати i <= pagesCount !!!!!!!
    for (let i = 1; i <= 5; i++) {
        page.push(i)
    }

    return (<div>
        <div className={classes.wrapper}>
            {page.map(p => {
                return <span className={props.currentPage === p && classes.pagination}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile'}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.photo}
                                     alt="user"/>
                            </NavLink>
                        </div>
                        <div>
                            {//у delete,get параметр withCredential іде 2 параметром, у post 3м
                                u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true, headers: {
                                            "API-KEY": "a7f73287-44f1-48ca-9d96-68bd8b05e9e8"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    })

                                }}>Unfollow</button> : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true, headers: {
                                            "API-KEY": "a7f73287-44f1-48ca-9d96-68bd8b05e9e8"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    })
                                }}>Follow</button>}
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
        </div>)}
    </div>)
}

export default Users;