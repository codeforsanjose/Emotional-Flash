import React, { Component } from 'react';
import EmotionalFlash from './emotional-flash.js';
import './App.css';
import 'bulma/css/bulma.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {userid: "fred", progress: 0}
    };
  }

  updateProgress = (value) => {
      if ((this.state.user.progress + value) <= 0 || (this.state.user.progress + value ) >= 100 ){
        return;
      }
      this.setState({
        user: {
          user: this.state.user.userid,
          progress: this.state.user.progress + value,
        }
      })
  }

  render() {
    return (
      <div className="App">
        <EmotionalFlash user={this.state.user} updateProgress={this.updateProgress}/>
      </div>
    );
  }
}

