import React from 'react'
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {

  <BrowserRouter>
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/create-account' component={Register} />
      <Router exact path='/home' component={Home} />
      <Router component={NotFound} /> 
    </Switch>
  </BrowserRouter>
}

export default App;