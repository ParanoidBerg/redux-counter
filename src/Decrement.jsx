import React from 'react';
import styles from './sttyles.module.css'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const Decrement = () => {
    const dispatch = useDispatch()

    const handleDecrement = () => {
        dispatch({type: 'decrement'})
    }
    return (
        <button className={styles.minus} onClick={handleDecrement}>Уменьшить</button>
    );
};

export default Decrement;