import React, { Component } from 'react';
import EmotionalFlash from './emotional-flash.js';
import Homepage from './homepage.js';
import Dashboard from './dashboard.js';
import Login from './login.js';
import SignUp from './signup.js';
import './App.css';
import 'bulma/css/bulma.css'
import Nav from './nav.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { firebaseAuth } from './firebase';
import { logout } from './auth';

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/Dashboard' />}
    />
  )
}

function PrivateRoute ({component: Component, authed, user, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} user={user} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}} } />}
    />
  )
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      user: {userid: "fred", progress: 0}
    };
  }

  componentDidMount(){
    this.removeListener = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({
          authed: true,
        })
      } else {
        this.setState({
          authed: false,
        })
       }
    })
  }

  componentWillUnmount(){
    this.removeListener();
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


//             <Route path="/EmotionalFlash" render={()=><EmotionalFlash user={this.state.user} updateProgress={this.updateProgress} />} />

  render() {
    return (
        <Router>
          <div className="App">
             <Nav authed={this.state.authed} />
             <Route exact path="/" render={()=><Homepage />} />
             <PrivateRoute authed={this.state.authed} user={this.state.user} path="/Dashboard" component={Dashboard} />
             <Route path="/EmotionalFlash" render={()=><EmotionalFlash user={this.state.user} updateProgress={this.updateProgress} />} />
             <PublicRoute authed={this.state.authed} path="/Login" component={Login} />
             <PublicRoute authed={this.state.authed} path="/SignUp" component={SignUp} />
          </div>
        </Router>

    );
  }
}

