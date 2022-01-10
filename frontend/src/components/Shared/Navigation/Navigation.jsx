import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <nav className=''>
                    <NavLink className={styles.logo} to='/'>
                        <img src="/src/images/logo.png" alt="logo"/>
                        <span>Coder's Room</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navigation
