import firebase from "firebase/compat/app"
import"firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC2FnVBSkB7dioNWOM3wWrkXWunp1Vo804",
  authDomain: "my-second-project-b22f6.firebaseapp.com",
  projectId: "my-second-project-b22f6",
  storageBucket: "my-second-project-b22f6.appspot.com",
  messagingSenderId: "278314902954",
  appId: "1:278314902954:web:4501520b7ee7d231cbf7d3"
};
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;

