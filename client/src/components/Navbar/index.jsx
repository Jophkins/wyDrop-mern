import React from 'react';

import styles from './Navbar.module.scss';
import Logo from '../../assets/img/logo.png';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <img src={Logo} alt="" className={styles.navbar__logo}/>
        <div className={styles.navbar__header}>wyDrop</div>
        {!isAuth && <div className={styles.navbar__login}>
          <NavLink to="/login">
            Login
          </NavLink>
        </div>}
        {!isAuth && <div className={styles.navbar__registration}>
          <NavLink to="/registration">
            Registration
          </NavLink>
        </div>}
        {isAuth && <div onClick={() => dispatch(logout())} className={styles.navbar__registration}>
            Sign out
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
