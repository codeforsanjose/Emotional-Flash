import React, { Component } from 'react';
import Card from './card';
import MultipleChoiceAnswer from './multiple-choice-answer';

export default class MultipleChoiceAnswers extends Component {


//selected answer, selectanswer, answers
// Randomizes card pictures as well as the order they appear in the cardGallery, returns Card elements to display.
renderAnswers = () => {

    return this.props.answers.map((answer, index) => {
    	if (answer === this.props.selectedAnswer){
    		return(
    			<MultipleChoiceAnswer 
    				key={index}
    				id={index}
    				selectAnswer={this.props.selectAnswer}
    				answer={answer}
    				isSelected={true}
    			/>
    		)}
    	else {

    		return(
    			<MultipleChoiceAnswer 
    				key={index}
    				id={index}
    				selectAnswer={this.props.selectAnswer}
    				answer={answer}
    				isSelected={false}
    			/>
    		)}
    })
}



// Card gallery holds the three card options. No logic implemented yet.
 render() {
    return (
      <div className="card-gallery">
      		{this.renderAnswers()}
      </div>
    );
  }
}

