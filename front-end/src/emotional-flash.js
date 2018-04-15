import React, { Component } from 'react';
import CardGallery from './card-gallery';
import SadPicture1 from './assets/sad/sad1.jpg';
import SadPicture2 from './assets/sad/sad2.jpg';
import HappyPicture1 from './assets/happy/happy1.jpg';
import HappyPicture2 from './assets/happy/happy2.jpg';
import AngryPicture1 from './assets/angry/angry1.jpg';
import AngryPicture2 from './assets/angry/angry2.jpg';
import { firebaseApp } from './firebase';

// Hardcoded Pictures. TODO: Make Request to backend instead.


export default class EmotionalFlash extends Component {


	//Emotional Flash is the component that displays the game and handles logic.
  constructor(props){
    super(props);
    this.state = {
      quizQuestion: '',
      questionAnswer: '',
      whichCardIsSelected: null, 
      isCorrect: null,
      cardGallery: [],
    }
    const db = firebaseApp.firestore();
    const emotions = db.collection("imageURL").doc("emotions").collection("angry");
    
    var query = emotions.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      }).catch( err => {
        console.log('error' , err);
      })


  }

  randomizeCards = () => {
      const happyPictures = [HappyPicture1, HappyPicture2]; //hardcoded pictures array
      const sadPictures = [SadPicture1, SadPicture2];       // hardcoded pictures array
      const angryPictures = [AngryPicture1, AngryPicture2]; // hardcoded pictures array
      // Choose a random happy, sad, and angry picture from the arrays of pictures.
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
        
      this.setState({ cardGallery: pictureArray });
  }
  
  renderFooterBar = () => {
    if (this.state.isCorrect === null){
      return (
        <nav className="level">
          <div className="level-left">
            <button className="button is-dark is-medium is-rounded is-outlined" onClick={this.checkAnswer}>Skip</button>
          </div>
          <div className="level-right">
            <button className="button is-success is-medium is-rounded" onClick={this.checkAnswer}>Check</button>
          </div>
        </nav>
      );

    }
    if (this.state.isCorrect === true){
      let style = { backgroundColor: '#bff199' };
        return (
        <nav style={style} className="level">
          <div className="level-left">
            <h1 style={{ color: '#23d160'}} class="title">You are correct!</h1>
          </div>
          <div className="level-right">
            <button className="button is-success is-medium is-rounded" onClick={this.reset}>Continue</button>
          </div>
        </nav>
        )
    }
    if (this.state.isCorrect === false){
      let style = { backgroundColor: '#ffd3d1' };
      return (
        <nav style={style} className="level">
          <div className="level-left">
            <h1 style={{ color: '#ff3860'}} class="title">Incorrect</h1>
          </div>
          <div className="level-right">
            <button className="button is-danger is-medium is-rounded" onClick={this.reset}>Continue</button>
          </div>
        </nav>
      )
    }
  }

  selectCard = (key) => {
    this.setState({ whichCardIsSelected: key });
  }

  checkAnswer = () => {
    if (this.state.whichCardIsSelected === this.state.questionAnswer){
      // todo more stuff
      this.props.updateProgress(10);
      this.setState({ isCorrect: true });
    }
    else{
      this.props.updateProgress(-10);
      this.setState({ isCorrect: false });
    }
  }

  generateQuestion = () => {
    const selector = Math.floor((Math.random() * 3) + 1); // Generate a random number between 1 and 3.
    if (selector === 1){
      this.setState({ quizQuestion: "Select the emotion for 'Happy'", questionAnswer: 'happy', isCorrect: null});
    }
    if (selector === 2){
      this.setState({ quizQuestion: "Select the emotion for 'Sad'", questionAnswer: 'sad', isCorrect: null});
    }
    if (selector === 3){
      this.setState({ quizQuestion: "Select the emotion for 'Angry'", questionAnswer: 'angry', isCorrect: null});
    }
  }

  reset = () => {
    this.generateQuestion();
    this.randomizeCards(); 
    this.setState({
      whichCardIsSelected: null
    })
 }

  componentWillMount(){
    this.generateQuestion();
    this.randomizeCards();
  }

  render() {
    return (
      <div className="emotional-flash">
        <progress style={{ width: '75%' }} className="progress is-success is-large" value={this.props.user.progress} max="100"></progress>
      	<h1 className="title">{this.state.quizQuestion}</h1>
      	<CardGallery whichCardIsSelected={this.state.whichCardIsSelected} selectCard={this.selectCard} cardGallery={this.state.cardGallery}/>
        {this.renderFooterBar()}
      </div>
    );
  }
}

