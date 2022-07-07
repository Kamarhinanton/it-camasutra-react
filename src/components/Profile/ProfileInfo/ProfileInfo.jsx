import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return (
            <Preloader/>
        )
    }
    return (
        <div>
            {/*<img*/}
            {/*    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"*/}
            {/*    alt="avatar"/>*/}
            <div className={classes.content}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusHooks status={props.status} updateStatus ={props.updateStatus}/>
            </div>
        </div>)

}

export default ProfileInfo;