import classes from "../users/users.module.css";
import preloader from "../../assets/images/Skateboarding.gif";
import React from "react";


let Preloader = (props) => {
    return <img className={classes.preloader} src={preloader} alt='preloader'/>
}

export default Preloader;

