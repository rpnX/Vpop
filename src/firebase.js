import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBaONJCB-N9gNuJ6gpAZjr69v9OwTetseU",
    authDomain: "vpop-bed35.firebaseapp.com",
    databaseURL: "https://vpop-bed35.firebaseio.com",
    projectId: "vpop-bed35",
    storageBucket: "vpop-bed35.appspot.com",
    messagingSenderId: "656302546202",
    appId: "1:656302546202:web:d4ff6421cbafa1a1d460a3",
    measurementId: "G-9CFR1CCW44"
    };
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


