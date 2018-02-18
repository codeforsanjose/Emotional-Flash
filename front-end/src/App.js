import React, { Component } from 'react';
import EmotionalFlash from './emotional-flash.js';
import './App.css';
import 'bulma/css/bulma.css'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {userid: "fred", progress: 20}
    };
  }

  updateProgress(){
    this.setState({
      userid: {
        userid: this.state.userid,
        progress: this.state.user.progress + 10,
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

