import React, { Component } from 'react';
import Card from './card';
// Hardcoded Pictures. TODO: Make Request to backend instead.
import SadPicture1 from './assets/sad/sad1.jpg';
import SadPicture2 from './assets/sad/sad2.jpg';
import HappyPicture1 from './assets/happy/happy1.jpg';
import HappyPicture2 from './assets/happy/happy2.jpg';
import AngryPicture1 from './assets/angry/angry1.jpg';
import AngryPicture2 from './assets/angry/angry2.jpg';


export default class CardGallery extends Component {

constructor(props){
	super(props);
	this.state = {
		whichCardIsSelected: null, // 0: first card, 1: second card, 2: third card
		happyPictures: [HappyPicture1, HappyPicture2],
		sadPictures: [SadPicture1, SadPicture2],
		angryPictures: [AngryPicture1, AngryPicture2]
	}
}	

// Randomizes card pictures as well as the order they appear in the cardGallery, returns Card elements to display.
renderCardSection = () => {
	const { happyPictures, sadPictures, angryPictures, whichCardIsSelected} = this.state;
	// Choose a random happy, sad, and angry picture from the arrays.
	const happyPicture = {
		picture: happyPictures[Math.floor((Math.random() * happyPictures.length))], 
		type: 'happy'
	}
	const sadPicture = {
		picture: sadPictures[Math.floor((Math.random() * sadPictures.length))],
		type: 'sad'
	}
	const angryPicture = {
		picture: angryPictures[Math.floor((Math.random() * angryPictures.length))],
		type: 'angry'
	}
	const pictureArray = [happyPicture, sadPicture, angryPicture];

	// Algorithm to shuffle the pictureArray
    for (var i = pictureArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = pictureArray[i];
        pictureArray[i] = pictureArray[j];
        pictureArray[j] = temp;
    }

    return pictureArray.map((item, index) => {
    	if (index === whichCardIsSelected){
	    	return (<Card key={index} 
	    		  img={item.picture}
	    		  type={item.type}
	    		  selectCard={this.selectCard}
	    		  isSelected={true}
	    	/>)
	    }
	    else{
	    	return (<Card key={index} 
	    		  img={item.picture}
	    		  type={item.type}
	    		  selectCard={this.selectCard}
	    		  isSelected={false}
	    	/>)
	    }
    }
    );
}

selectCard = (key) => {
	this.setState({ whichCardIsSelected: key });
}

// Card gallery holds the three card options. No logic implemented yet.
 render() {
    return (
      <div className="card-gallery">
      		{this.renderCardSection()}
      </div>
    );
  }
}

