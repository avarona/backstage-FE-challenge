import React from 'react';
import styles from './styles.module.scss';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

type State = {
  inputValue: string;
};

class Form extends React.Component<{}, State> {
  state = {
    inputValue: ''
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value })
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ inputValue: '' });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <form className={styles.formContainer} onSubmit={this.onSubmit}>
        <FormInput onChange={this.onChange} value={inputValue} />
        <Button text="Submit" />
      </form>
    )
  }
}

export default Form;
