import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js'
import CharComponent from './CharComponent/CharComponent.js'

class App extends  Component {

  state = {
    textLength: 0,
    text: ""
  }

  
  textHandler = (event) => {
    const text = event.target.value;
    this.setState({text: text});
  }

  deleteCharHandler = (charIndex) => {
    let characters = [...this.state.text];
    characters.splice(charIndex, 1);
    let modifiedText="";
    let c;
    for(c in characters) {
      modifiedText = modifiedText + characters[c];
    }
    this.setState({text: modifiedText});
  }

  render () {

    let characters = [...this.state.text];
    let chars = null;
    if(characters.length) {
      chars = (
        <div>
          {characters.map((c, index) => {
            return <CharComponent 
            value={c}
            click={() => this.deleteCharHandler(index)}/>
          })}
        </div>
      )
    }
    

    return (
      <div className="App">
        <input type="text" value={this.state.text} onChange={(event) => this.textHandler(event)}/>
        <p>Text Length: {this.state.text.length}</p>
        <ValidationComponent length={this.state.text.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
