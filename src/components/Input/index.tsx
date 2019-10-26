import React from 'react';
import styles from './styles.module.scss';

type Props = {
  value: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: Props) => (
  <div className={styles.inputContainer}>
    <input className={styles.input} type="text" name="input" onChange={onChange} value={value} />
  </div>
);

export default Input;
