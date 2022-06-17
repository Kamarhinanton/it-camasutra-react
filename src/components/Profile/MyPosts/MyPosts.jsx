import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css';


const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let OnAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    //key={dialog.id} щоб не було помилки key, у map завжди пторібно ставити атрибут key
    let posts = props.posts.map(post => <Post key={post.id} message ={post.message} likes={post.counts}/>)
    return <div>
        <h1>My posts</h1>
        <div className={classes.content}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
            <button onClick={OnAddPost}>add post</button>
            <button>remove post</button>
        </div>
        <ul className={classes.post}>
            {posts}
        </ul>
    </div>


}

export default MyPosts;