//класові компоненти:

import React from "react";
import classes from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
//стврорення обʼєктів за допомогою літерала обʼєкту let a = {name: 'Dima', age: 31}, та класів let a new Man('Dima', 31)
//у класових компонентів до props звертаємось через this
class Users extends React.Component {
    //у класах обʼявляємо методи

    //якщо конструктор тільки приймає пропс його можна не писати, це відбувається по замовчуванню
    // constructor (props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return(
            <div>
                <div>
                    <span className={classes.pagination}>1</span>
                    <span className={classes.pagination}>2</span>
                    <span className={classes.pagination}>3</span>
                    <span className={classes.pagination}>4</span>
                    <span className={classes.pagination}>5</span>
                </div>
                {
                    this.props.users.map(u => <div key = {u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small: userPhoto} className={classes.photo} alt="user"/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ?  <button onClick={()=> {this.props.unfollow(u.id)}}>Unfollow</button>
                                    :  <button onClick={()=> {this.props.follow(u.id)}}>Follow</button>
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
}

export default Users;