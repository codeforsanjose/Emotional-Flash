import React, { Component } from 'react';
import EmotionalFlash from './emotional-flash.js';
import './App.css';
import 'bulma/css/bulma.css'
import SadPicture1 from './assets/sad/sad1.jpg';
import SadPicture2 from './assets/sad/sad2.jpg';
import HappyPicture1 from './assets/happy/happy1.jpg';
import HappyPicture2 from './assets/happy/happy2.jpg';
import AngryPicture1 from './assets/angry/angry1.jpg';
import AngryPicture2 from './assets/angry/angry2.jpg';



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

