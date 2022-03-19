import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {

  const handleChange = (event) => {
    props.setValue(event.target.value);
  }

  return (
    <input className={styles.input} value={props.value} onChange={handleChange} type={props.type}
           placeholder={props.placeholder}/>
  );
};

export default Input;
