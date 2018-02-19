import React, { Component } from 'react';
import CardGallery from './card-gallery';

export default class EmotionalFlash extends Component {

	//Emotional Flash is the component that displays the game 
	//Emotional Flash Game.
  constructor(props){
    super(props);
    this.state = {
      quizQuestion: '',
      questionAnswer: '',
      whichCardIsSelected: null, 
      isCorrect: null
    }
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
      this.setState({ quizQuestion: "Select the emotion for 'Happy'", questionAnswer: 'happy'});
    }
    if (selector === 2){
      this.setState({ quizQuestion: "Select the emotion for 'Sad'", questionAnswer: 'sad'});
    }
    if (selector === 3){
      this.setState({ quizQuestion: "Select the emotion for 'Angry'", questionAnswer: 'angry'});
    }
  }

  reset = () => {
    this.generateQuestion();
  }

  componentWillMount(){
    this.generateQuestion();
  }

  render() {
    return (
      <div className="emotional-flash">
        <progress style={{ width: '75%' }} className="progress is-success is-large" value={this.props.user.progress} max="100"></progress>
      	<h1 className="title">{this.state.quizQuestion}</h1>
      	<CardGallery whichCardIsSelected={this.state.whichCardIsSelected} selectCard={this.selectCard} />
        {this.renderFooterBar()}
      </div>
    );
  }
}

