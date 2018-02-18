import React, { Component } from 'react';
import Card from './card';
// Hardcoded Pictures. TODO: Make Request to backend instead.
import SadPicture from './assets/sad1.jpg';
import AngryPicture from './assets/angry1.jpg';
import HappyPicture from './assets/happy1.jpg';


export default class CardGallery extends Component {

// Card gallery holds the three card options. No logic implemented yet.
  render() {
    return (
      <div className="card-gallery">
      		<Card type="happy" img={HappyPicture} />
      		<Card type="angry" img={AngryPicture} />
      		<Card type="sad" img={SadPicture}	  />
      </div>
    );
  }
}

