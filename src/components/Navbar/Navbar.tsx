import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export let Navbar=()=>{
    return(
        <nav className={classes.Nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink></div>
            <div className={classes.item}><a >News</a></div>
            <div className={classes.item}><a >Music</a></div>
        </nav>
    )
}

