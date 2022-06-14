import React from 'react';
import {AddPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(AddPost())
    }
    let onPostChange = (text) => {
        let action = updateNewPostText(text)
        props.store.dispatch(action)
    }
    return (<MyPosts
        updateNewPostText = {onPostChange}
        addPost={addPost}
        posts = {state.profilePage.posts}
        newPostText = {state.profilePage.newPostText}
    />)
}

export default MyPostsContainer;