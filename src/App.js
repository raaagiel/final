import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch, Route } from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import Form from './pages/form'
import Maps from './pages/map'
import Template1 from './template/template1'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/form' component={Form} />
        <Route exact path='/map' component={Maps} />
        <Route exact path='/template1' component={Template1} />
      </Switch>
    </div>
  );
}

export default App;
