  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQwicnsn9E1OCtCbiQYS93Dq36nKYDPvE",
    authDomain: "student-attendence-35eca.firebaseapp.com",
    databaseURL: "https://student-attendence-35eca.firebaseio.com",
    projectId: "student-attendence-35eca",
    storageBucket: "student-attendence-35eca.appspot.com",
    messagingSenderId: "172810461707",
    appId: "1:172810461707:web:14834e998bdaf396d0dd0e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();