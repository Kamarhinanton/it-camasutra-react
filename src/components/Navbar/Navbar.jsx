import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink  to="dialogs/" className={({ isActive }) => (isActive ? classes.active : classes.inactive)}>
                        dialogs
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="profile/" className={({ isActive }) => (isActive ? classes.active : classes.inactive)}>
                        profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;