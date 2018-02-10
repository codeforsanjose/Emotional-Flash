import React, { Component } from 'react';
import CardGallery from './card-gallery';

export default class EmotionalFlash extends Component {

	//Emotional Flash is the component that displays the game 
	//Emotional Flash Game.

  render() {
    return (
      <div className="emotional-flash">
      	<p>Select the emotion for "Happy"</p>
      	<CardGallery />
      </div>
    );
  }
}

