import React, { Component } from 'react';
import Card from './card';
import MultipleChoiceAnswers from './multiple-choice-answers';
import CorrectMatch from './correct-match';
import IncorrectMatch from './incorrect-match';
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
      })
      .then(res => {
        this.randomizeQuestion();
      })
      .catch( err => {
        console.log('error' , err);
      })
  }

  randomizeQuestion = () => {
    const imagesAndEmotions = this.state.imagesAndEmotions;
    const randomIndex = Math.floor((Math.random() * imagesAndEmotions.length));
    const url = imagesAndEmotions[randomIndex].imageURL;
    const answer = imagesAndEmotions[randomIndex].emotion;
    this.setState({ imageURL: url, correctAnswer: answer });
  }


  // Helper Functions
  checkAnswer = () => {
    this.state.correctAnswer === this.state.selectedAnswer ? this.setState({ isCorrect: true }) : this.setState({ isCorrect: false });
  }

  selectAnswer = (answer) => {
    this.setState({ selectedAnswer: answer });
  }

  reset = () => {
    this.randomizeQuestion();
    this.setState({ isCorrect: null })
  }

  renderSection = () => {
    if (this.state.isCorrect === null)
      return(
        <div className="emotional-flash">
          <progress style={{ width: '75%' }} className="progress is-success is-large" value={this.props.user.progress} max="100"></progress>
          <h1 className="title">Which emotion is shown in the picture?</h1>
          <img id="mult-choice-image" src={this.state.imageURL}></img>
          <MultipleChoiceAnswers selectedAnswer={this.state.selectedAnswer} selectAnswer={this.selectAnswer} answers={this.state.answers}/>
          <button className="button" onClick={this.checkAnswer} >Submit</button>
        </div>)
    else if (this.state.isCorrect === true)
      return <CorrectMatch reset={this.reset} />
    else if (this.state.isCorrect === false)
      return <IncorrectMatch reset={this.reset} />

  }

  // Render Function
  render() {
    return (
       <div className="emotional-flash">
        {this.renderSection()}
       </div>
    );


  }
}

