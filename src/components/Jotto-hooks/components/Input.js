import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="Current guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess('')
          }}
          data-test="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input;