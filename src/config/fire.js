import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDaFQOct9M-SfmuTqhfsuLSgRYUz3-7nEQ",
    authDomain: "debateme-c9bd0.firebaseapp.com",
    databaseURL: "https://debateme-c9bd0.firebaseio.com",
    projectId: "debateme-c9bd0",
    storageBucket: "debateme-c9bd0.appspot.com",
    messagingSenderId: "706144517276",
    appId: "1:706144517276:web:3a8eaaddbffc28728d8159",
    measurementId: "G-2LGH8VNQG4"
  };

const fire = firebase.initializeApp(config);
export default fire;
