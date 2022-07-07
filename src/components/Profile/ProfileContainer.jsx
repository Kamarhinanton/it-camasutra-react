import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {getStatus} from "../../redux/profile-reducer";

//...this.props, прокидує усі пропси які у нього прийшли

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = '2'
        this.props.getUserProfile()
        this.props.getStatus(userId);
    }

    render() {
    return (
        <Profile {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
    )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}) (ProfileContainer);