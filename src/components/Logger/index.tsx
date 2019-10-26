import React from 'react';
import styles from './styles.module.scss';
import LogItem, { Props as LogItemProps} from '../LogItem';

export type Props = {
  log: Array<LogItemProps['item']>;
}

const Logger = ({ log }: Props) => (
  <ul className={styles.loggerContainer}>
    {log.map((item, i) => (
      <li key={i}>
        <LogItem item={item}/>
      </li>
    ))}
  </ul>
)

export default Logger;
