import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './features/Navbar';
import Home from './features/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

export default App;
