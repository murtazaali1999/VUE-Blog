import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9IJLCJ6lWtIwTEQWgZ4J5W7-4BcW5MXk",
    authDomain: "vue-blogfire.firebaseapp.com",
    projectId: "vue-blogfire",
    storageBucket: "vue-blogfire.appspot.com",
    messagingSenderId: "976030682477",
    appId: "1:976030682477:web:6c0c7056e60b5848cb9e64"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimeStamp;

exports.modules = {
    connection: app,
    firestore: app.firestore(),
    timestamp
}