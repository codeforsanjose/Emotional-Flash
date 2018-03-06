
import React, { Component } from 'react';
var Link = require('react-router-dom').Link;

export default class HomePage extends Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
		  <div className="home-page" >
		  	<div className="tile is-ancestor">
		  		<div className="tile is-8 is-parent">
			  			<div className="tile is-child box">
			  				<div className="categories">
				  				<h1>Pick a Category</h1>
				  					<div>
					  					<Link className="button is-link category-button" to="/EmotionalFlash">Emotional Flash</Link>
					  					<a className="button is-primary category-button" title="Disabled button" disabled>Animals</a>
					  			  	<a className="button is-warning category-button" title="Disabled button" disabled>Something</a>
				  					</div>
				  			</div>
			  			</div>
		  		</div>
		  		<div className="tile is-parent is-vertical">
		  			<div className="tile is-child box">
		  				<h1>Welcome, {this.props.user.userid}</h1>
		  				<h1>Experience: {this.props.user.progress}</h1>
		  			</div>
		  			<div className="tile is-child box">
		  				<p>Another box to put stuff</p>
		  			</div>
		  		</div>
		  	</div>
		  </div>
		);
	}
}

