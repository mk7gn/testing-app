import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import { actionTypes } from '../../actions';

class Jotto extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[{
          guessedWord: 'train',
          letterMatchCount: 3
        }]} />
      </div>
    )
  }
}

export default connect(null, actionTypes)(Jotto);