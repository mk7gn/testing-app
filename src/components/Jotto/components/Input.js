import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../../actions';

export class UnconnectedInput extends Component {
  /**
   *Creates an instance of UnconnectedInput.
   * @param {object} props
   * @memberof UnconnectedInput
   */
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: ''
    };

    this.submitGuessWord = this.submitGuessWord.bind(this);
  }

  submitGuessWord(e) {
    e.preventDefault();

    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length) {
      this.props.guessWord(this.state.currentGuess);
      this.setState({currentGuess: ''});
    }
  }

  render() {
    const content = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({currentGuess: e.target.value})}
          type="text"
          placeholder="enter guess"/>
        <button
          type="submit"
          className="btn btn-primary mb-2"
          data-test="submit-button"
          onClick={this.submitGuessWord}>
            Submit
        </button>
      </form>
    );

    return (
      <div data-test="component-input">
        { content }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);