import React from 'react';
import {AddPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(AddPost())
                }
                let onPostChange = (text) => {
                    let action = updateNewPostText(text)
                    store.dispatch(action)
                }
                return <MyPosts
                    updateNewPostText = {onPostChange}
                    addPost={addPost}
                    posts = {state.profilePage.posts}
                    newPostText = {state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
        )
}

export default MyPostsContainer;