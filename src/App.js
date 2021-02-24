import React, { Component } from 'react'
import Component1 from './Class_Component'
import State1 from './State1'
import State2 from './State2'
import State3 from './State3'
import Props from './Props'
import Navbar from './Components/Navbar'

import { BrowserRouter, Switch, Route } from 'react-router-dom'



export default class App extends Component {
  
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <h1>
                Welcome
              </h1>
            </Route>
            <Route path='/state-1' component={State1} />
            <Route path='/state-2' component={State2} />
            <Route path='/state-3' component={State3} />
            <Route path='*' >
              <h1>
                Pages Not Found
              </h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}