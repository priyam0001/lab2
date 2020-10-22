import React from 'react';
import About from '../About';
import Home from '../Home';
// You're likely missing some imports...
import {
  BrowserRouter as Router,
  Switch, Link, Route
} from 'react-router-dom';

import Styles from './styles';

// Don't forget to import your components

const Nav = () => {
  return (
    <Router>
      <Styles.Nav>
        <ul>
          <li>
            <Link to ="/" >Home</Link>
          </li>
          <li>
            <Link to="/About" >About</Link> 
          </li>
        </ul>
      </Styles.Nav>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path= "/About">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;