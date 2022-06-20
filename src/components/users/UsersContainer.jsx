import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAc, unfollowAC} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
    //users: -props який прийде в компоненту
    return{
        users: state.usersPage.users
    }
}

//mapDispatch створений щоб передавати callback функції
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);