import React from 'react';

import styles from './Navbar.module.scss';
import Logo from '../../assets/img/logo.png';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <img src={Logo} alt="" className={styles.navbar__logo}/>
        <div className={styles.navbar__header}>wyDrop</div>
        <div className={styles.navbar__login}>
          <NavLink to="/login">
            Login
          </NavLink>
        </div>
        <div className={styles.navbar__registration}>
          <NavLink to="/registration">
            Registration
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
