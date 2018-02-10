import React, { Component } from 'react';
import EmotionalFlash from './emotional-flash.js';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      progress: null,
    };
  }


  render() {
    return (
      <div className="App">
        <EmotionalFlash />
      </div>
    );
  }
}

