import React, { Component } from 'react';

export default class IncorrectMatch extends Component {

	nextQuestion = () => {

	}

	render() {
		return (
		  <div className="corect-match" >
		    <h1>Try Again</h1>
		    <h2> - Explanation? -  </h2>
        <button className="button" onClick={this.NextQuestion}>Try Again</button>
		  </div>
		);
	}
}

