import React from 'react';
import styles from './styles.module.scss';
import Form from '../Form';

const App = () => (
  <div className={styles.appContainer}>
    <h1 className={styles.appTitle}>Backstage Front End Challenge</h1>
    <Form />
  </div>
);

export default App;
