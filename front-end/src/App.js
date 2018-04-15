import React, { Component } from 'react';
import EmotionalFlash from './emotional-flash.js';
import HomePage from './homepage.js';
import Login from './login.js';
import SignUp from './signup.js';
import './App.css';
import 'bulma/css/bulma.css'
import Nav from './nav.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
          userid: this.state.user.userid,
          progress: this.state.user.progress + value,
        }
      })
  }

  render() {
    return (
        <Router>
          <div className="App">
             <Nav />
             <Route exact path="/" render={()=><HomePage user={this.state.user} />} />
             <Route path="/EmotionalFlash" render={()=><EmotionalFlash user={this.state.user} updateProgress={this.updateProgress} />} />
             <Route path="/Login" render={()=> <Login />} />
             <Route path="/SignUp" render={() => <SignUp />} />
          </div>
        </Router>

    );
  }
}

