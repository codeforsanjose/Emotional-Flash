import React, { Component } from 'react';

export default class CorrectMatch extends Component {

	nextQuestion = () => {

	}

	render() {
		return (
		  <div className="corect-match" >
		    <h1>You got it!</h1>
        <img id="mult-choice-image" src={this.props.imageURL}></img>
		    <h2> - Explanation here -  </h2>
        <button className="button" onClick={this.props.reset} >Next Question</button>
		  </div>
		);
	}
}

