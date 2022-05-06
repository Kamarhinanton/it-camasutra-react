import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <li className={classes.item}>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png"
                 alt="avatar"/>
            <a href="src/components/Profile/Profile#">
                {props.message}
            </a>
            <span>{props.likes}</span>
        </li>
    )
}

export default Post;