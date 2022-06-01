import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateText(text);
    }

    let newPostElement = React.createRef();

    // let postData = [{id : 1, message: 'Hi, how are you', counts: 5 }, {id: 2, message: 'Hey you', counts: '23' }];
    let posts = props.postData.map(post => <Post message ={post.message} likes={post.counts}/>)
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