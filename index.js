import React from 'react'
import { render } from 'react-dom'
import {Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import WorkItems from './modules/WorkItems'
import WorkItem from './modules/WorkItem'
import NotFound from './modules/NotFound'
import Releases from './modules/Releases'
import Release from './modules/Release'

//render(<App/>, document.getElementById('app'))

render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/workitems" component={WorkItems}>
          <Route path="/workitem/:id" component={WorkItem}></Route>
        </Route>
        <Route path="/releases" component={Releases}>
          <Route path="/release/:id" component={Release}></Route>
        </Route>
        <Route path="/about" component={About}/>
      </Route>
      <Route path="*" component = {NotFound}></Route>
    </Router>
), document.getElementById('app'));
