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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.SetCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let page = [];

        for(let i = 1; i <= pagesCount; i++){
            page.push(i)
        }

        return(
            <div>
                <div className={classes.wrapper}>
                    {page.map(p => {
                      return  <span className={this.props.currentPage === p && classes.pagination}
                                    onClick={()=> {this.onPageChanged(p)}}>{p}</span>
                    })}
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