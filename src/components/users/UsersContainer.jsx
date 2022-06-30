import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/user-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader";

class UsersContainer extends React.Component {
    //у класах обʼявляємо методи

    //якщо конструктор тільки приймає пропс його можна не писати, це відбувається по замовчуванню
    // constructor (props) {
    //     super(props);
    // }

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then( data=> {
        //     this.props.setUsers(data.items)
        //     this.props.setUsersTotalCount(data.totalCount)
        //     this.props.toggleIsFetching(false);
        // })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        // })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    //users: -props який прийде в компоненту
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

//mapDispatch створений щоб передавати callback функції
// let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAc(users));
//         },
//         SetCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAc(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

//!!
// let name = 15;
// let user = {
//     name
//
//     еквівалентно:
//     name: name
// }

//даний випадок еквівалентний тому, як ми записували у mapDispatchToProps як окрему функцію вище

export default connect (mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);