import firebase, {firestore} from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApFS2z_LmhpSep_k6e-UvT8YtHPVuSUL0",
  authDomain: "elibrary-8877f.firebaseapp.com",
  projectId: "elibrary-8877f",
  storageBucket: "elibrary-8877f.appspot.com",
  messagingSenderId: "480640414774",
  appId: "1:480640414774:web:c1f43a8774bfc1ce6f9497",
  measurementId: "G-EYZQ2TSYC9"
};
if(firebase.apps.length===0){
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore();
