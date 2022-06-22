import React from 'react';
import styles from './sttyles.module.css'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const Increment = () => {

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch({type: 'increment'})
    }

    return (
        <button className={styles.plus} onClick={handleIncrement}>Увеличить</button>
    );
};

export default Increment;