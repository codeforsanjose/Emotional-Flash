import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import { NavLink } from 'react-router-dom'

export default class Login extends Component {
	constructor(props){
		super(props);
	}
	
	logIn(event){
		event.preventDefault();
		firebaseApp.auth().signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value).catch(function(error) {
			console.log(error.code);
			console.log(error.message);
		})
	}

			 //  <div className="login" >
		  // 	<h2>Sign In</h2>
		  // 	<form onSubmit={this.logIn.bind(this)} >
		  // 		<input type="text" ref="email"></input>
		  // 		<input type ="password" ref="password"></input>
		  // 		<button>Log In</button>
		  // 	</form>
		  // </div>

 renderLoginPage = () => {
 	return (
 		<section class="hero is-success is-fullheight">
 			<div class="hero-body">
 				<div class="container has-text-centered">
 					<div class="column is-4 is-offset-4">
 						<h3 class="title has-text-grey">Login</h3>
 						<p class="subitlte has-text-grey">Please login to proceed</p>
 						<div class="box" id="login-box">
 							<form>	

	              <div class="field">
	                <div class="control">
	                  <input class="input is-medium" type="email" placeholder="Your Email" autofocus=""></input>
	                </div>
              	</div>

	             <div class="field">
	                <div class="control">
	                  <input class="input is-medium" type="password" placeholder="Your Password"></input>
	                </div>
               </div>

               <button class="button is-block is-info is-medium is-fullwidth" >Login</button>

               <p class="has-text-grey" id="login-footer">
               	 	<NavLink exact className="nav-link-login" activeClassName='active' to="/">Sign Up</NavLink> &nbsp; &nbsp; &nbsp; &nbsp;
               	 	<NavLink exact className="nav-link-login"activeClassName='active' to="/">Forgot Password</NavLink>
               </p>

 							</form>
 						</div>
 					</div>
 				</div>
 			</div>
 		</section>

 	);
 }

	render() {
		return (
		  <div className="login" >
		  	{this.renderLoginPage()}
		  </div>
		);
	}
}

