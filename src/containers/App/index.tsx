import React from 'react';
import styles from './styles.module.scss';
import Form from '../Form';
import Logger from '../../components/Logger';

const App = () => (
  <div className={styles.appContainer}>
    <div className={styles.appContent}>
      <Form />
    </div>
    <Logger />
  </div>
);

export default App;
