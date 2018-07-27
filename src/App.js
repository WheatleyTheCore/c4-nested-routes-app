import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AComp from './components/firstComp';
import Second from './components/secondComp';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/1">To our first component</Link></li>
        <li><Link to="/2">To our second component</Link></li>
      </ul>
      <hr/>

      <Route path="/1" component={AComp}/>
      <Route path="/2" component={Second}/>
    </div>
  </Router>
)
export default App