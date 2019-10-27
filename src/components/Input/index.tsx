import React from 'react';
import styles from './styles.module.scss';

type Props = {
  value: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: Props) => (
  <div className={styles.inputContainer}>
    <input
      className={styles.input}
      type="text"
      pattern="^[1-9][0-9]?$|^100$"
      name="input"
      onChange={onChange}
      value={value}
      placeholder="Enter a number between 0 and 101"
      required
    />
  </div>
);

export default Input;
