import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
const config = {
    apiKey: "AIzaSyC3K5jvFmIt85MvKGhq1IVrnvTbqdDB5BU",
    authDomain: "ecom-39691.firebaseapp.com",
    projectId: "ecom-39691",
    storageBucket: "ecom-39691.appspot.com",
    messagingSenderId: "312065568952",
    appId: "1:312065568952:web:2221d0f75ec1b9a398044d"
};
const fireDb = firebase.initializeApp(config)
export default fireDb.database().ref();
