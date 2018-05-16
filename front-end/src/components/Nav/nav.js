import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { logout } from '../Auth/auth';

export default class Nav extends Component {


	render(){
		return(
			<nav className="navbar is-info" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<div className="navbar-item nav-brand">
							Emotional Flash
						</div>
					</div>

					<div className="navbar-menu">
						<div className="navbar-end">
							<div className="navbar-item">
									<NavLink exact className="nav-link" activeClassName='nav-active' to="/">
										Home
									</NavLink>
							</div>
							<div className="navbar-item">
								{
									this.props.authed 
									? 
									<div>
										<NavLink className="nav-link" activeClassName='nav-active' to="/Dashboard">
											Dashboard
										</NavLink>
										&nbsp;&nbsp;&nbsp;&nbsp;
										<NavLink class="nav-link" onClick={() => logout() } to="/" >
										  Logout
										</NavLink>
									</div>
									: <div>
											<NavLink className="nav-link" activeClassName='nav-active' to="/Login">
											  Login
											</NavLink>
											<NavLink id="nav-register-link" className="nav-link" activeClassName='nav-active' to="/SignUp">
											  Register
											</NavLink>
										</div>
								}
							</div>
						</div>
					</div>
				</nav>
		)
	}
}