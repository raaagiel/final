import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import loginmodal from './pages/loginmodal';

function App() {
  return (
    <div>


      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={loginmodal} />

      </Switch>
    </div>
  );
}

export default App;
