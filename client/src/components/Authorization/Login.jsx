import React, {useState} from 'react';
import styles from './Authorization.module.scss';
import Input from "../../utils/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={styles.authorization}>
      <div className={styles.authorization__header}>Login</div>
      <Input value={email} setValue={setEmail} type="email" placeholder="Email" />
      <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
      <button onClick={() => dispatch(login(email, password))} className={styles.authorization__btn}>Sign in</button>
    </div>
  );
};

export default Login;
