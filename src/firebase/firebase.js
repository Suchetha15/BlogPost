import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCCYZnHmJPYnpn6sCtpZf6H4NpQgaEBfoQ",
    authDomain: "my-blog-app-9a262.firebaseapp.com",
    databaseURL: "https://my-blog-app-9a262.firebaseio.com",
    projectId: "my-blog-app-9a262",
    storageBucket: "my-blog-app-9a262.appspot.com",
    messagingSenderId: "388062342666"
  };
firebase.initializeApp(config);
const database = firebase.database();
  
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export { firebase, googleAuthProvider, facebookAuthProvider,  database as default};