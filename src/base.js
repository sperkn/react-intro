import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCBqlqSjvJjndpkFMMqTeqTQbVAiGM_ppo",
    authDomain: "catch-of-the-day-sperkn.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-sperkn.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;