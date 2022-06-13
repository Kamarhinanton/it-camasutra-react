import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';
import {AddPost, updateNewPostText} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let addPost = () => {
        props.dispatch(AddPost())
    }
    let onPostChange = () => {
        let NewText = newPostElement.current.value;
        props.dispatch(updateNewPostText(NewText))
    }

    let newPostElement = React.createRef();

    let posts = props.posts.map(post => <Post message ={post.message} likes={post.counts}/>)
    return <div>
        <h1>My posts</h1>
        <div className={classes.content}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
            <button onClick={addPost}>add post</button>
            <button>remove post</button>
        </div>
        <ul className={classes.post}>
            {posts}
        </ul>
    </div>


}

export default MyPosts;