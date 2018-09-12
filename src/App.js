import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './view/home'
import Login from './view/login'



class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} >home</Route>
        <Route path='/login' component={Login} >login</Route>
      </Switch>
    );
  }
}

export default App;
