import React from 'react';
import styles from './styles.module.scss';
import LogItem, { Props as LogItemProps} from '../LogItem';

export type Props = {
  log: Array<LogItemProps['item']>;
}

class Logger extends React.Component<Props> {
  logItemRef = React.createRef<HTMLLIElement>()

  componentDidUpdate() {
    this.scrollToLastItem()
  }

  scrollToLastItem = () => {
    if(!this.logItemRef.current) return;

    const listItem = this.logItemRef.current.querySelector('li');
    !!listItem && listItem.scrollIntoView();
  }

  render() {
    const { log } = this.props;

    return (
      <ul className={styles.loggerContainer}>
        {log.map((item, i) => {
          if(i === log.length - 1) {
            return <li key={i} className={styles.loggerItem} ref={this.logItemRef}>
              <LogItem item={item}/>
            </li>
          } else {
            return (
              <li key={i} className={styles.loggerItem}>
                <LogItem item={item}/>
              </li>
            );
          }
        })}
      </ul>
    )
  }
};

export default Logger;
