import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
  constructor(props) {
    super(props)
  }
  
  /*handleClick = (e) => {
    this.props.onReceiveCoordinates(e.clientX, e.clientY)
  }*/

  render() {
    let callback = (e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])
    return (
        <button onClick={callback} value="Coordinate" />
    )
  }
  
}