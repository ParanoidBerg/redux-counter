import React from 'react';
import Number from './Number';
import Buttons from './Buttons';
import styles from './sttyles.module.css'


function App() {
  return (
    <div className={styles.counter}>
    <Number />
    <Buttons />
    </div>
  );
}

export default App;
