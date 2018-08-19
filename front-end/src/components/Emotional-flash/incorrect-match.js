import React, { Component } from 'react';

export default class IncorrectMatch extends Component {

	// TODO: Add explanation 

	render() {
		return (
		  <div className="corect-match" >
		    <h1>Try Again</h1>
		    <img id="mult-choice-image" src={this.props.imageURL}></img>
        <button className="button" onClick={this.props.reset}>Try Again</button>
		  </div>
		);
	}
}

