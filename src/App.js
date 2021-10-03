import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Details from './containers/Details/Details';
import Home from './containers/Home/Home';
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/details" component={Details}/>
    </Router>
  );
};

export default App;