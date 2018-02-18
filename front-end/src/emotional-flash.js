import React, { Component } from 'react';
import CardGallery from './card-gallery';

export default class EmotionalFlash extends Component {

	//Emotional Flash is the component that displays the game 
	//Emotional Flash Game.
  constructor(props){
    super(props);
    this.state = {
      isCorrect: null
    }
  }

  renderFooterBar = () => {
    if (this.state.isCorrect === null){
      return (
        <nav className="level">
          <div className="level-left">
            <button className="button is-dark is-medium is-rounded is-outlined">Skip</button>
          </div>
          <div className="level-right">
            <button className="button is-success is-medium is-rounded">Check</button>
          </div>
        </nav>
      );

    }
    if (this.state.isCorrect === true){

    }
    if (this.state.isCorrect === false){

    }

  }

  render() {
    return (
      <div className="emotional-flash">
        <progress style={{ width: '75%' }} className="progress is-success is-large" value={this.props.user.progress} max="100"></progress>
      	<h1 className="title">Select the emotion for "Happy"</h1>
      	<CardGallery />
        {this.renderFooterBar()}
      </div>
    );
  }
}

