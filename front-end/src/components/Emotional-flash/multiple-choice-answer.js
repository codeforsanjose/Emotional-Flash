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
		  <div className="card" >
		  	<h1 style={style} onClick={this.handleClick}>{this.props.answer}</h1>
		  </div>
		);
	}
}

