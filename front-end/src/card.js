import React, { Component } from 'react';

export default class Card extends Component {

  render() {
    return (
      <div className="card">
      	<img src={this.props.img}></img>
      </div>
    );
  }
}

