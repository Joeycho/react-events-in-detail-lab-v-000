import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
  constructor(props) {
    super(props)
  }
  
  handleClick = (e) => {
    
    e.persist()
    setTimeout((e) => {this.props.onDelayedClick(e)},this.props.delay)
   // this.props.onDelayedClick(e)
    //this.props.onDelayedClick()
  }

  render() {
    //let callback = (e) => {setTimeout((e) => {this.props.onDelayedClick(e)},this.props.delay)}
    
    return (
        <button onClick={handleClick} value="Delay"/>
    )
  }
  
}