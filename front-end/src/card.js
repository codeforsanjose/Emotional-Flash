import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props){
		super(props);
	}
	// a card represent one of the three options to choose from. Usually holds an image.

	handleClick = () => {
		this.props.selectCard(this.props.type);
	}

	render() {
		let style = {};
		this.props.isSelected ? style = { border: '5px solid lightGreen' } : style = {};

		return (
		  <div className="card" >
		  	<img style={style} src={this.props.img} onClick={this.handleClick}></img>
		  </div>
		);
	}
}

