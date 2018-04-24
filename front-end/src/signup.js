import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import { NavLink } from 'react-router-dom';
import { auth, saveUser } from './auth';

export default class SignUp extends Component {
	constructor(props){
		super(props);
		this.state = {
      NotMatchingPasswords: false,
    };
	}
	

	signUp = (event) => {
		event.preventDefault();
		if (this.refs.password.value !== this.refs.verifyPassword.value){
			this.setState({ NotMatchingPasswords: true })
			console.log("Passwords not Matching!");
			return;
		}
		auth(this.refs.email.value, this.refs.password.value).catch(error => console.log(error));
	}

	renderSignUpSection = () => {
		return this.state.NotMatchingPasswords ? 

	 		<section class="hero is-fullheight" id="login-hero">
	 			<div class="hero-body">
	 				<div class="container has-text-centered">
	 					<div class="column is-4 is-offset-4">
	 						<h3 class="title has-text-grey">Sign Up</h3>
	 						<div class="box" id="login-box">
	 							<form onSubmit={this.signUp}>	

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

		             <div class="field">
		                <div class="control">
		                  <input class="input is-medium" type="password" placeholder="Retype Password" ref="verifyPassword"></input>
		                </div>
	               </div>

	               <label class="checkbox">
								  <input type="checkbox">
								  I agree to the <a href="#">terms and conditions</a>
								  </input>
								</label>

	               <p id="error-message"> Passwords do not match </p>
	               <button class="button is-block is-success is-medium is-fullwidth" >Signup</button>
	 							</form>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 		</section>

 			:

			<section class="hero is-fullheight" id="login-hero">
	 			<div class="hero-body">
	 				<div class="container has-text-centered">
	 					<div class="column is-4 is-offset-4">
	 						<h3 class="title has-text-grey">Sign Up</h3>
	 						<div class="box" id="login-box">
	 							<form onSubmit={this.signUp}>	

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

		             <div class="field">
		                <div class="control">
		                  <input class="input is-medium" type="password" placeholder="Retype Password" ref="verifyPassword"></input>
		                </div>
	               </div>


	               <label class="checkbox">
								  <input type="checkbox"></input>
								  <a href="#"> &nbsp; I agree to the terms and conditions</a>
								</label>

	               <button class="button is-block is-success is-medium is-fullwidth signup-button" >Signup</button>
	 							</form>
	 						</div>
	 					</div>
	 				</div>
	 			</div>
	 		</section>
	}



	render(){
		return (
			<div>
				{this.renderSignUpSection()}
			</div>
		)
	}

}