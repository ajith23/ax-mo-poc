import React from 'react'

export default React.createClass({
  render(){
    return(
      <h2>Work Item Number - {this.props.params.id}</h2>
    )
  }
})
