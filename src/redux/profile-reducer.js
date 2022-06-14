const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts : [
            {id : 1, message: 'Hi, how are you', counts: 5 },
            {id: 2, message: 'Hey you', counts: '23' }],
        newPostText : 'hello, Anton',
}

const profileReducer = (state= initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                counts: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const AddPost = () => ({type: ADD_POST})
export const updateNewPostText = (NewText) => ({type: UPDATE_NEW_POST_TEXT, text: NewText})

export default  profileReducer;