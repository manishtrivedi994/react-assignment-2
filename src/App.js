import React, { Component } from 'react';
import './App.css';
import validationComponent from './ValidationComponent/ValidationComponent.js'

class App extends  Component {

  state = {
    textLength: 0
  }

  lengthHandler = (event) => {
    const text = event.target.value;
    const length = text.length;
    this.setState({textLength: length})
    console.log(this.state.textLength);
  }

  render () {
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.lengthHandler(event)}/>
        <p>Text Length: {this.state.textLength}</p>
        <validationComponent length={this.state.textLength} name="loond"/>
      </div>
    );
  }
}

export default App;
