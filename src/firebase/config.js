import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyCzQSkFP9pJR8LVFWjGJ3PeBqCDk_IonH8",
  authDomain: "pala-e1e85.firebaseapp.com",
  projectId: "pala-e1e85",
  storageBucket: "pala-e1e85.appspot.com",
  messagingSenderId: "93268400388",
  appId: "1:93268400388:web:18d08c22fb809bb7d9d851"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;