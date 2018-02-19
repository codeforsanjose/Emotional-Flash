import React, { Component } from 'react';

export default class Card extends Component {

	constructor(props){
		super(props);
		this.state = {
			isSelected: false,
		}
	}
	// a card represent one of the three options to choose from. Usually holds an image.


  render() {
  	let style = {};
  	this.state.isSelected ? style = { border: '3px solid lightGreen' } : style = {};

    return (
      <div className="card">
      	<img style={style} src={this.props.img}></img>
      </div>
    );
  }
}

