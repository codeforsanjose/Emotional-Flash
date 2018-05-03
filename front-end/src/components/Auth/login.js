import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { login, resetPassword } from './auth';

export default class Login extends Component {
	constructor(props){
		super(props);
	}
	
	logIn = (event) => {
		event.preventDefault();
		login(this.refs.email.value, this.refs.password.value).catch((error) => {
			console.log(error.code);
			console.log(error.message);
		})

	}



 renderLoginPage = () => {
 	return (
 		<section class="hero is-fullheight" id="login-hero">
 			<div class="hero-body">
 				<div class="container has-text-centered">
 					<div class="column is-4 is-offset-4">
 						<h3 class="title has-text-grey">Login</h3>
 						<p class="subitlte has-text-grey">Please login to proceed</p>
 						<div class="box" id="login-box">
 							<form onSubmit={this.logIn}>	
	              <div class="field">
	                <div class="control">
	                  <input class="input is-medium" type="email" placeholder="Your Email" ref="email"></input>
	                </div>
              	</div>

	             <div class="field">
	                <div class="control">
	                  <input class="input is-medium" type="password" placeholder="Your Password" ref="password"></input>
	                </div>
               </div>

               <button class="button is-block is-info is-medium is-fullwidth" >Login</button>

               <p class="has-text-grey" id="login-footer">
               	 	<NavLink exact className="nav-link-login" activeClassName='active' to="/SignUp">Sign Up</NavLink> &nbsp; &nbsp; &nbsp; &nbsp;
               	 	<NavLink exact className="nav-link-login" activeClassName='active' to="/ForgotPassword">Forgot Password</NavLink>
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

