import React, { Component } from 'react';
import EmotionalFlash from './emotional-flash.js';
import HomePage from './homepage.js';
import './App.css';
import 'bulma/css/bulma.css'
import Nav from './nav.js';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


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

//  <Route path="/EmotionalFlash" render={()=><EmotionalFlash user={this.state.user} updateProgress={this.updateProgress} />} />

  render() {
    return (
        <Router>
          <div className="App">
             <Nav />
             <Route exact path="/" render={()=><HomePage user={this.state.user} />} />
             <Route path="/EmotionalFlash" render={()=><EmotionalFlash user={this.state.user} updateProgress={this.updateProgress} />} />
          </div>
        </Router>

    );
  }
}

