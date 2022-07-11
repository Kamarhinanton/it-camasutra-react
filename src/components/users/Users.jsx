import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/pagination";

let Users = (props) => {
    return (<div>
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
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
                                    props.unfollow(u.id)

                                }}>Unfollow</button> : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
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