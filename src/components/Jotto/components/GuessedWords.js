import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({guessedWords}) => {
  let content;
  if (guessedWords.length) {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    content = (
      <div data-test="guessed-words">
          <h3>Guessed words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching letters</th>
              </tr>
            </thead>
            <tbody>
              { guessedWordsRows }

            </tbody>
          </table>
      </div>
    );
  } else {
    content = <span data-test="guess-instruction">Try to guess the secret word!</span>;
  }
  return (
    <div data-test="component-guessed-words">
      { content }
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;