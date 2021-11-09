import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <h1>
              Bookstore
            </h1>
            <div className="nav-links">
              <Link to="/"> Books </Link>
              <Link to="/categories">Categories</Link>
            </div>
          </nav>
        </header>

        <Switch>
          <Route path="/categories">
            <h1> Categories </h1>
          </Route>

          <Route path="/">
            <h1> Books </h1>
          </Route>
        </Switch>

      </Router>
    </div>
  )
}

export default App;
