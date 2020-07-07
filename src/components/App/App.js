import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Counter from '../Counter/Counter';
import Jotto from '../Jotto/Jotto';
// import { actionTypes } from '../../actions';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <nav>
              <Link to="/">Dashboard  |  </Link>
              <Link to="/counter">Counter component  |  </Link>
              <Link to="/jotto">Jotto component  |  </Link>
            </nav>
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
// export default connect(null, actionTypes)(App);