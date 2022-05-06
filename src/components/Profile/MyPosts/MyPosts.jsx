import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return <div>
        <h1>My posts</h1>
        <div>
            <textarea></textarea>
            <button>add post</button>
            <button>remove post</button>
        </div>
        <ul className={classes.post}>
            <Post message ='Hi, how are you' likes='5'/>
            <Post message ='Hey you' likes='23'/>
        </ul>
    </div>


}

export default MyPosts;