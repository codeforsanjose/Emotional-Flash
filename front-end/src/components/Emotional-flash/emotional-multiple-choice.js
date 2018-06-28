import React, { Component } from 'react';
import Card from './card';
import MultipleChoiceAnswers from './multiple-choice-answers';
import { firebaseApp } from '../../firebase';



export default class EmotionalMultipleChoice extends Component {

  // EmotionalMultipleChoice is the component that displays the game and handles logic.
  constructor(props){
    super(props);
    this.state = {
      isCorrect: null,
      correctAnswer: null,
      selectedAnswer: null,
      imageURL: null,
      imagesAndEmotions: [],
      answers: ["angry", "happy", "sad"]
    }
  }


  // Set Up 
  componentWillMount(){
    this.queryDatabaseForImages();
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.imagesAndEmotions !== prevState.imagesAndEmotions) {
      this.randomizeQuestion();
    }
  }

  queryDatabaseForImages = () => {
     const db = firebaseApp.firestore();
     const allImages = db.collection("imageURL").doc("emotions").collection("all");
     const allImagesArray = [];
     allImages.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
         let emotionImageObject = { imageURL: doc.data().imageURL, emotion: doc.data().emotion };
         allImagesArray.push(emotionImageObject);
         this.setState({ imagesAndEmotions: allImagesArray });
        });
      }).catch( err => {
        console.log('error' , err);
      })
  }

  randomizeQuestion = () => {
    const randomIndex = Math.floor((Math.random() * this.state.imagesAndEmotions.length));
    const url = this.state.imagesAndEmotions[randomIndex].imageURL;
    this.setState({ imageURL: url })
  }


  // Helper Functions
  checkAnswer = () => {
    this.state.correctAnswer === this.state.selectedAnswer ? this.setState({ isCorrect: true }) : this.setState({ isCorrect: false });
  }

  selectAnswer = (answer) => {
    this.setState({ selectedAnswer: answer });
  }



  // Render Function
  render() {
    return (
      <div className="emotional-flash">
        <progress style={{ width: '75%' }} className="progress is-success is-large" value={this.props.user.progress} max="100"></progress>
        <h1 className="title">Which emotion is shown in the picture?</h1>
        <img src={this.state.imageURL}></img>
        <MultipleChoiceAnswers selectedAnswer={this.state.selectedAnswer} selectAnswer={this.selectAnswer} answers={this.state.answers}/>
        <button className="button" onClick={this.checkAnswer} >Submit</button>
      </div>
    );
  }
}

