import React from 'react'
import { Link,IndexLink } from 'react-router'
import NavigationLink from './NavigationLink'

export default React.createClass({

  render() {
    return(
    <div>
      <h1>Welcome to Axosoft Mobile!</h1>
      <ul>
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><NavigationLink to="/about" >About</NavigationLink></li>
        <li><NavigationLink to="/workitems" >Work Items</NavigationLink></li>
      </ul>
      {this.props.children}
      <div>----------------------------------------------------------</div>
    </div>)
  }
})
