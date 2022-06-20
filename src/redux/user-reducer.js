const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
        users : [
        ],
}

const userReducer = (state= initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                //!копіюємо тільки те що потрібно змінити, не поторібно копіювати якщо не змінюємо обʼєкт
                    ...state,
                    // users: [...state.users] аналогічно використовуємо map який вертає новий масив:
                    users: state.users.map(u => {
                        if(u.id === action.userId){
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
                    if(u.id === action.userId){
                        //копіюємо юзера так як ми його змінюємо
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS :
            //до існуючого масиву з юзерами додаємо нових:
            return { ...state, users: action.users }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAc = (users) => ({type: SET_USERS, users})

export default  userReducer;