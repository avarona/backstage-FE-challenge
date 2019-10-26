import React from 'react';
import styles from './styles.module.scss';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

import { getDifferenceOfSquares } from '../../api';

type State = {
  inputValue: string;
  resultValue: string;
};

class Form extends React.Component<{}, State> {
  state = {
    inputValue: '',
    resultValue: '',
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value })
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { inputValue } = this.state;
    const payload = Number(inputValue);

    // make request to backend for the calculation
    getDifferenceOfSquares(payload).then((res: any) => {
      this.setState({ resultValue: res.value })
    }).catch((err) => console.error(err));

    // clear the state
    this.setState({ inputValue: '', resultValue: '' });
  }

  render() {
    const { inputValue, resultValue } = this.state;
    return (
      <form className={styles.formContainer} onSubmit={this.onSubmit}>
        <FormInput onChange={this.onChange} value={inputValue} />
        <Button text="Submit" />
        {resultValue}
      </form>
    )
  }
}

export default Form;
