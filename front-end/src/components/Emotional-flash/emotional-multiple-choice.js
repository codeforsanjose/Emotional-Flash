import React, { Component } from 'react';
import Card from './card';
import MultipleChoiceAnswers from './multiple-choice-answers';
import { firebaseApp } from '../../firebase';

// Hardcoded Pictures. TODO: Make Request to backend instead.


export default class EmotionalMultipleChoice extends Component {


  //Emotional Flash is the component that displays the game and handles logic.
  constructor(props){
    super(props);
    this.state = {
      isCorrect: null,
      selectedAnswer: null,
      answers: ["angry", "happy", "sad"]
    }

  }

  selectAnswer = (answer) => {
    this.setState({ selectedAnswer: answer });
  }


  render() {
    return (
      <div className="emotional-flash">
        <progress style={{ width: '75%' }} className="progress is-success is-large" value={this.props.user.progress} max="100"></progress>
        <h1 className="title">Which emotion is shown in the picture?</h1>
        <Card />
        <MultipleChoiceAnswers selectedAnswer={this.state.selectedAnswer} selectAnswer={this.selectAnswer} answers={this.state.answers}/>
      </div>
    );
  }
}

