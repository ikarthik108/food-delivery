import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//Web app's Firebase configuration
const config = {
    apiKey: "AIzaSyB6_gnDybSr6073w6WIdB9NMBEkwkJl7EA",
    authDomain: "food-delivery-61bda.firebaseapp.com",
    projectId: "food-delivery-61bda",
    storageBucket: "food-delivery-61bda.appspot.com",
    messagingSenderId: "661362295747",
    appId: "1:661362295747:web:2b6ae05c925983da913376",
    measurementId: "G-X4ETPHFHQ4"
};

// Initialize Firebase
 firebase.initializeApp(config);

 export const auth=firebase.auth();
 export const firestore=firebase.firestore();

 //Setting up Google Auth utility

 const provider=new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
 export const signInWithGoogle=()=> auth.signInWithPopup(provider);

 export default firebase;


