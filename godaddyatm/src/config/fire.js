import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyBKetHCACAMlAJ2L_52EK1TbICeLVHGAxQ",
    authDomain: "godaddy-atm.firebaseapp.com",
    databaseURL: "https://godaddy-atm.firebaseio.com",
    projectId: "godaddy-atm",
    storageBucket: "godaddy-atm.appspot.com",
    messagingSenderId: "598072633347",
    appId: "1:598072633347:web:6cbcd9ecb47ef922cd8636",
    measurementId: "G-1CEW02CK86"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;