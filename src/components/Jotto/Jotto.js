import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import Input from './components/Input';
import { getSecretWord } from '../../actions';

class Jotto extends Component {
  render() {
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    )
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords}) => {
  return {
    success,
    secretWord,
    guessedWords
  }
}

export default connect(mapStateToProps, { getSecretWord })(Jotto);