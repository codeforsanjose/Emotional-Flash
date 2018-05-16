import React, { Component } from 'react';
import Card from './card';
import Questions from './questions';
import { firebaseApp } from '../../firebase';

// Hardcoded Pictures. TODO: Make Request to backend instead.


export default class EmotionalMultipleChoice extends Component {


  //Emotional Flash is the component that displays the game and handles logic.
  constructor(props){
    super(props);
    this.state = {
      isCorrect: null,
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


  render() {
    return (
      <div className="emotional-flash">
        <progress style={{ width: '75%' }} className="progress is-success is-large" value={this.props.user.progress} max="100"></progress>
        <h1 className="title">Which emotion is displayed in the picture?</h1>
        <Questions />
        <Card />
        {this.renderFooterBar()}
      </div>
    );
  }
}

