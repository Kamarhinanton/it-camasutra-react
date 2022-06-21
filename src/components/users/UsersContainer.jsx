import Users from "./UsersClassComponent";
import {connect} from "react-redux";
import {followAC, setCurrentPageAc, setUsersAc, setUsersTotalCountAC, unfollowAC} from "../../redux/user-reducer";

let mapStateToProps = (state) => {
    //users: -props який прийде в компоненту
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        SetCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAc(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);