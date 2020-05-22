import * as firebase from "firebase/app";
import "firebase/firestore";

// var firebaseConfig = {
//     apiKey: "AIzaSyBaONJCB-N9gNuJ6gpAZjr69v9OwTetseU",
//     authDomain: "vpop-bed35.firebaseapp.com",
//     databaseURL: "https://vpop-bed35.firebaseio.com",
//     projectId: "vpop-bed35",
//     storageBucket: "vpop-bed35.appspot.com",
//     messagingSenderId: "656302546202",
//     appId: "1:656302546202:web:d4ff6421cbafa1a1d460a3",
//     measurementId: "G-9CFR1CCW44"
//     };

var firebaseConfig = {
    apiKey: "AIzaSyCpSOUVjcZsI54ElldIZ_65QgTbx0QNBXo",
    authDomain: "popkovich-a0cec.firebaseapp.com",
    databaseURL: "https://popkovich-a0cec.firebaseio.com",
    projectId: "popkovich-a0cec",
    storageBucket: "popkovich-a0cec.appspot.com",
    messagingSenderId: "644312159702",
    appId: "1:644312159702:web:228856c0a30a49eff80077"
};




firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


