import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import styles from './sttyles.module.css'


const Number = () => {
    const num = useSelector((state)=> state.number )
    return (
        <div className={styles.num}>
            {num}
        </div>
    );
};

export default Number;