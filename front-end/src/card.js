import React, { Component } from 'react';

export default class Card extends Component {

	// a card represent one of the three options to choose from. Usually holds an image.
  render() {
    return (
      <div className="card">
      	<img src={this.props.img}></img>
      </div>
    );
  }
}

