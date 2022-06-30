import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                //!копіюємо тільки те що потрібно змінити, не поторібно копіювати якщо не змінюємо обʼєкт
                ...state,
                // users: [...state.users] аналогічно використовуємо map який вертає новий масив:
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        //копіюємо юзера так як ми його змінюємо
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                //!копіюємо тільки те що потрібно змінити, не поторібно копіювати якщо не змінюємо обʼєкт
                ...state,
                // users: [...state.users] аналогічно використовуємо map який вертає новий масив:
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        //копіюємо юзера так як ми його змінюємо
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS :
            //до існуючого масиву з юзерами додаємо нових:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

export const followSucces = (userId) => ({type: FOLLOW, userId})
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})

export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
            dispatch(toggleIsFetching(false));
        })
    }
}

export const follow = (id) => {

   return (dispatch) => {
       dispatch(toggleFollowingProgress(true, id));
       usersAPI.follow(id).then(response => {
           if (response.data.resultCode === 0) {
               dispatch(followSucces(id))
           }
           dispatch(toggleFollowingProgress(false, id));
       })
    }
}

export const unfollow = (id) => {

   return (dispatch) => {
       dispatch(toggleFollowingProgress(true, id));
       usersAPI.unfollow(id).then(response => {
           if (response.data.resultCode === 0) {
               dispatch(unfollowSucces(id))
           }
           dispatch(toggleFollowingProgress(false, id));
       })
    }
}
export default userReducer;