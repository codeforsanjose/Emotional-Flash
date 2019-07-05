import React, { Component } from 'react';

export default class MultipleChoiceAnswer extends Component {
	// a card represent one of the three options to choose from. Usually holds an image.

	handleClick = () => {
		this.props.selectAnswer(this.props.answer);
	}

	render() {
		let style = {};
		this.props.isSelected ? style = { border: '5px solid lightGreen' } : style = {};

		return (
		  <div onClick={this.handleClick}style={style} className="mult-choice-answer button" >
		  	<h1 >{this.props.answer}</h1>
		  </div>
		);
	}
}

