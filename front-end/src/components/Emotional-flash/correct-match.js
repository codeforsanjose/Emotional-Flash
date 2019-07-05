import React, { Component } from 'react';

export default class CorrectMatch extends Component {

	// TODO Add Explanation

	render() {
		return (
		  <div className="corect-match" >
		    <h1>You got it!</h1>
        <img id="mult-choice-image" src={this.props.imageURL}></img>
        <button className="button" onClick={this.props.reset} >Next Question</button>
		  </div>
		);
	}
}

