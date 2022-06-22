import React from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import Reset from './Reset';
import styles from './sttyles.module.css'

const Buttons = () => {
    return (
        <div className={styles.buttons}>
            
        <Reset />
        <Increment />
        <Decrement />
        </div>
    );
};

export default Buttons;