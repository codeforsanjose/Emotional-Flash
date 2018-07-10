import React, { Component } from 'react';

export default class IncorrectMatch extends Component {



	render() {
		return (
		  <div className="corect-match" >
		    <h1>Try Again</h1>
		    <img id="mult-choice-image" src={this.props.imageURL}></img>
		    <h2> - Explanation here -  </h2>
        <button className="button" onClick={this.props.reset}>Try Again</button>
		  </div>
		);
	}
}

