import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return <nav className={classes.nav}>
        <ul>
            <li className={`${classes.item} ${classes.active}`}>
                <a href="src/components/Navbar/Navbar#">
                    messages
                </a>
            </li>
            <li className={classes.item}>
                <a href="src/components/Navbar/Navbar#">
                    profile
                </a>
            </li>
            <li className={classes.item}>
                <a href="src/components/Navbar/Navbar#">
                    music
                </a>
            </li>
            <li className={classes.item}>
                <a href="src/components/Navbar/Navbar#">
                    settings
                </a>
            </li>
        </ul>
    </nav>

}

export default Navbar;