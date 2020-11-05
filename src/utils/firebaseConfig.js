import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAttuRAMI0xGFw_YnmLgmX0mvj0gjRKtF0",
    authDomain: "react-auth-de663.firebaseapp.com",
    
    //databaseURL: "https://react-auth-de663.firebaseio.com",
    //projectId: "react-auth-de663",
    //storageBucket: "react-auth-de663.appspot.com",
    //messagingSenderId: "258489500067",
    //appId: "1:258489500067:web:56f681c309109fd7411a16"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;