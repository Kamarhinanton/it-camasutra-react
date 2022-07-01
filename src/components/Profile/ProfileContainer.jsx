import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";

//...this.props, прокидує усі пропси які у нього прийшли

class ProfileContainer extends React.Component{

    componentDidMount(){
        this.props.getUserProfile();
    }

    render() {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile}) (ProfileContainer);