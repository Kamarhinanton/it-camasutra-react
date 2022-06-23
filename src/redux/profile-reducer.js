const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
        posts : [
            {id : 1, message: 'Hi, how are you', counts: 5 },
            {id: 2, message: 'Hey you', counts: '23' }],
        newPostText : 'hello, Anton',
        profile: null
}

const profileReducer = (state= initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                counts: 0,
            };
            //по правилам ньютабельності маємо працювати з копією обєкту {...state}
            //у reducer копіюємо тільки те що дійсно збираємось змінювати
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];

            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const AddPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostText = (NewText) => ({type: UPDATE_NEW_POST_TEXT, text: NewText})

export default  profileReducer;