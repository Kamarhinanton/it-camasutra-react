import {AddPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(AddPost())},
        updateNewPostText: (text) => {
            let action = updateNewPostText(text)
            dispatch(action)
        }
    }
}
//connect має свій subscribe, тому не потрібно перемальовувати(subscribe) дерево при зміні state
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;