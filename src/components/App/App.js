import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Counter from '../Counter/Counter';
// import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Dashboard} exact />
            <Route path="/counter" component={Counter} exact />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
// export default connect(null, actions)(App);