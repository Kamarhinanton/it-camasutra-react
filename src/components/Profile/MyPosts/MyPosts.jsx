import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    // let postData = [{id : 1, message: 'Hi, how are you', counts: 5 }, {id: 2, message: 'Hey you', counts: '23' }];
    let posts = props.postData.map(post => <Post message ={post.message} likes={post.counts}/>)
    return <div>
        <h1>My posts</h1>
        <div>
            <textarea></textarea>
            <button>add post</button>
            <button>remove post</button>
        </div>
        <ul className={classes.post}>
            {posts}
        </ul>
    </div>


}

export default MyPosts;