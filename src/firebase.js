import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAsiyXyp1OQx-UNGa9wYrldDPtpdwg84IQ",
  authDomain: "linkedin-fe791.firebaseapp.com",
  projectId: "linkedin-fe791",
  storageBucket: "linkedin-fe791.appspot.com",
  messagingSenderId: "570103516073",
  appId: "1:570103516073:web:a644676854516cd84d92b8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };