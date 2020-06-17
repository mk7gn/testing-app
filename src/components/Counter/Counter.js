import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    }

    this.decrementCounter = this.decrementCounter.bind(this)
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter() {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementCounter() {
    if (this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    const errorClass = this.state.error ? '' : 'hidden';
    return (
      <div className="center-align" data-test="component-counter">
        <h2 data-test="counter-display">current count: {this.state.counter}</h2>
        <div data-test="counter-error-message" className={`error ${errorClass}`}>
          The counter cannot go below 0
        </div>
        <button data-test="increment-button" onClick={this.incrementCounter}>increment</button>
        <button data-test="decrement-button" onClick={this.decrementCounter}>decrement</button>
      </div>
    )

  }
}

export default Counter;