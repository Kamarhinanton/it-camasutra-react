import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink  to="dialogs/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                        dialogs
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="profile/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                        profile
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="users/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                        users
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="login/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                        login
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;