import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZCctdRp2zAbTWWcYSXnOfU0unvWYSGD0",
    authDomain: "catch-of-the-day-1bfa2.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-1bfa2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export {firebaseApp};
//this is a default export

export default base;