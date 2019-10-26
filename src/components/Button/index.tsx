import React from 'react';
import styles from './styles.module.scss';

type Props = {
  text: string;
}

const Button = ({ text }: Props) => (
  <button className={styles.buttonContainer} type="submit">
    {text}
  </button>
);

export default Button;
