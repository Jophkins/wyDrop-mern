import React, {useState} from 'react';
import styles from './Authorization.module.scss';
import Input from "../../utils/Input";
import {registration} from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.authorization}>
      <div className={styles.authorization__header}>Registration</div>
      <Input value={email} setValue={setEmail} type="email" placeholder="Email" />
      <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
      <button onClick={() => registration(email, password)} className={styles.authorization__btn}>Send</button>
    </div>
  );
};

export default Registration;
