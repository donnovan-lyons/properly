import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './features/Navbar';
import Home from './features/Home';
import Signin from './features/Signin';
import Signup from './features/Signup';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
      </div>
    </Router>
  );
}

export default App;
