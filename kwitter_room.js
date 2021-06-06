  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC5v9mKQ-_LZp6KF_lJ9952D1TxRJ_pNcY",
    authDomain: "rocky-eagle.firebaseapp.com",
    databaseURL: "https://rocky-eagle-default-rtdb.firebaseio.com",
    projectId: "rocky-eagle",
    storageBucket: "rocky-eagle.appspot.com",
    messagingSenderId: "344512378706",
    appId: "1:344512378706:web:70c0606d3e625b36b82c8b",
    measurementId: "G-5YSJ92766R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
