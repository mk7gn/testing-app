import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import Counter from '../Counter/Counter';
import Jotto from '../Jotto/Jotto';
// import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <navbar>
              <Link to="/">Dashboard  |  </Link>
              <Link to="/counter">Counter component  |  </Link>
              <Link to="/jotto">Jotto component  |  </Link>
            </navbar>
            <Route path="/" component={Dashboard} exact />
            <Route path="/counter" component={Counter} exact />
            <Route path="/jotto" component={Jotto} exact />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
// export default connect(null, actions)(App);