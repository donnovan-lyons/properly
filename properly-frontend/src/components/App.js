import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navbar from '../features/Navbar';
import Home from '../features/Home';
import Signin from '../features/Signin';
import Signup from '../features/Signup';
import LandlordSearchDisplay from '../features/LandlordSearchDisplay';
import MapSearchDisplay from '../features/MapSearchDisplay';
import { useDispatch } from 'react-redux';
import { loginStatus } from '../features/authSlice';
import { getLandlords } from '../features/landlordsSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginStatus())
    dispatch(getLandlords())
  });

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route path="/landlords" component={LandlordSearchDisplay}/>
          <Route path="/locations" component={MapSearchDisplay}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
