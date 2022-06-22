import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];

    for(let i = 1; i <= pagesCount; i++){
        page.push(i)
    }

    return (
        <div>
            <div className={classes.wrapper}>
                {page.map(p => {
                    return <span className={props.currentPage === p && classes.pagination}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.photo}
                                 alt="user"/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
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