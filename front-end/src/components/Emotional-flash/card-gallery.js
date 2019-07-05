import React, { Component } from 'react';
import Card from './card';

export default class CardGallery extends Component {

// Randomizes card pictures as well as the order they appear in the cardGallery, returns Card elements to display.
renderCardSection = () => {
    return this.props.cardGallery.map((item, index) => {
    	if (item.type === this.props.whichCardIsSelected){
	    	return (<Card key={index} 
	    		  id={index}
	    		  img={item.picture}
	    		  type={item.type}
	    		  selectCard={this.props.selectCard}
	    		  isSelected={true}
	    	/>)
	    }
	    else{
	    	return (<Card key={index} 
	    		  id={index}
	    		  img={item.picture}
	    		  type={item.type}
	    		  selectCard={this.props.selectCard}
	    		  isSelected={false}
	    	/>)
	    }
    });
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

