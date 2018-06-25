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
      correctAnswer: null,
      selectedAnswer: null,
      imageURLs: [],
      answers: ["angry", "happy", "sad"]
    }
  }

  componentWillMount(){
    this.queryDatabaseForImages();
  }

  selectAnswer = (answer) => {
    this.setState({ selectedAnswer: answer });
  }

  queryDatabaseForImages = () => {
     const db = firebaseApp.firestore();
     const allImages = db.collection("imageURL").doc("emotions").collection("all");
     const allImagesArray = [];

     allImages.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
         allImagesArray.push(doc.data().imageURL);
         this.setState({ imageURLs: allImagesArray });
        });
      }).catch( err => {
        console.log('error' , err);
      })
  }

  checkAnswer = () => {
    this.state.correctAnswer === this.state.selectedAnswer ? this.setState({ isCorrect: true }) : this.setState({ isCorrect: false });
  }

  render() {
    return (
      <div className="emotional-flash">
        <progress style={{ width: '75%' }} className="progress is-success is-large" value={this.props.user.progress} max="100"></progress>
        <h1 className="title">Which emotion is shown in the picture?</h1>
        {this.renderImage}
        <MultipleChoiceAnswers selectedAnswer={this.state.selectedAnswer} selectAnswer={this.selectAnswer} answers={this.state.answers}/>
        <button className="button" onClick={this.checkAnswer} >Submit</button>
      </div>
    );
  }
}

