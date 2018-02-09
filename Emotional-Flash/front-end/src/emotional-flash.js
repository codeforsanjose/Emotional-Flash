import React, { Component } from 'react';
import CardGallery from './card-gallery';

export default class EmotionalFlash extends Component {


  render() {
    return (
      <div className="emotional-flash">
      	<p>Select the emotion for "Happy"</p>
      	<CardGallery />
      </div>
    );
  }
}

