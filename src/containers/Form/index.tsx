import React from 'react';
import styles from './styles.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Logger, { Props as LoggerProps } from '../../components/Logger';

import { getDifferenceOfSquares } from '../../api';

type State = {
  inputValue: string;
  resultValue: string;
  log: LoggerProps['log'];
};

class Form extends React.Component<{}, State> {
  state = {
    inputValue: '',
    resultValue: '0',
    log: [],
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value })
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { inputValue, log } = this.state;
    const payload = Number(inputValue);

    // make request to backend for the calculation
    getDifferenceOfSquares(payload).then((res: any) => {
      this.setState({ resultValue: res.value, log: [...log, res] })
    }).catch((err) => console.error(err));

    // clear the state
    this.setState({ inputValue: '', resultValue: '' });
  }

  render() {
    const { inputValue, resultValue, log } = this.state;
    return (
      <>
        <div className={styles.formContainer}>
          <div className={styles.resultValue}>
            {resultValue}
          </div>
          <form className={styles.formFields} onSubmit={this.onSubmit} autoComplete="off">
              <Input onChange={this.onChange} value={inputValue} />
              <Button text="Submit" />
          </form>
        </div>

        <Logger log={log}/>
      </>
    )
  }
}

export default Form;
