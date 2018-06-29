import React, { Component } from 'react';

export default class CorrectMatch extends Component {

	nextQuestion = () => {

	}

	render() {
		return (
		  <div className="corect-match" >
		    <h1>You got it!</h1>
		    <h2> - Explanation? -  </h2>
        <button className="button" onClick={this.NextQuestion} >Next Question</button>
		  </div>
		);
	}
}

