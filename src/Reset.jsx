import React from 'react';
import styles from './sttyles.module.css'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const Reset = () => {
    const dispatch = useDispatch()

    const handleReset = () => {
        dispatch({type: 'reset'})
    }
    return (
        <button className={styles.reset} onClick={handleReset}>Сбросить</button>
    );
};

export default Reset;