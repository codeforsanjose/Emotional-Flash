import React, { Component } from 'react';
import CardGallery from './card-gallery';
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
      happyPictureURLs: [],
      sadPictureURLs: [],
      angryPictureURLs: [],
    }

  }

  queryDatabase = () => {
    const db = firebaseApp.firestore();
    const angryEmotions = db.collection("imageURL").doc("emotions").collection("angry");
    const happyEmotions = db.collection("imageURL").doc("emotions").collection("happy");
    const sadEmotions = db.collection("imageURL").doc("emotions").collection("sad");

    const sadEmotionsArray = [];
    const happyEmotionsArray = [];
    const angryEmotionsArray = [];

    sadEmotions.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
         sadEmotionsArray.push(doc.data().imageURL);
         this.setState({ sadPictureURLs: sadEmotionsArray });
        });
      }).catch( err => {
        console.log('error' , err);
      })

    happyEmotions.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
         happyEmotionsArray.push(doc.data().imageURL);
         this.setState({ happyPictureURLs: happyEmotionsArray });
        });
      }).catch( err => {
        console.log('error' , err);
      })

    angryEmotions.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
         angryEmotionsArray.push(doc.data().imageURL);
         this.setState({ angryPictureURLs: angryEmotionsArray });
        });
      }).catch( err => {
        console.log('error' , err);
      })

  }

  randomizeCards = () => {
    console.log(this.state);
      const happyPictures = this.state.happyPictureURLs;
      const sadPictures = this.state.sadPictureURLs;     
      const angryPictures = this.state.angryPictureURLs; 
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
    console.log("reset");
    this.generateQuestion();
    this.randomizeCards(); 
    this.setState({
      whichCardIsSelected: null
    })
 }

  componentWillMount(){
    this.queryDatabase();

  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.angryPictureURLs !== prevState.angryPictureURLs) {
      this.generateQuestion();
      this.randomizeCards();; // the state of something has changed -> execute callback function 
    } 

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

