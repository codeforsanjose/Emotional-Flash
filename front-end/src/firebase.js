import * as firebase from 'firebase';
require("firebase/firestore");

  var config = {
    apiKey: "AIzaSyA58MKY1iundIsWtITbVIPiTa9XeWKvltg",
    authDomain: "emotional-flash.firebaseapp.com",
    databaseURL: "https://emotional-flash.firebaseio.com",
    projectId: "emotional-flash",
    storageBucket: "gs://emotional-flash.appspot.com",
    messagingSenderId: "162777006723"
  };

export const firebaseApp = firebase.initializeApp(config);
