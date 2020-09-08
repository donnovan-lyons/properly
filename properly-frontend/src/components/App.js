import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../features/Navbar';
import Home from '../features/Home';
import Signin from '../features/Signin';
import Signup from '../features/Signup';
import LandlordSearchDisplay from '../features/LandlordSearchDisplay';
import AddressSearchDisplay from '../features/AddressSearchDisplay';
import LandlordProfile from '../features/LandlordProfile';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/logout" component={Home}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/landlord" component={LandlordProfile}/>
          <Route path="/landlords" component={LandlordSearchDisplay}/>
          <Route path="/locations" component={AddressSearchDisplay}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
