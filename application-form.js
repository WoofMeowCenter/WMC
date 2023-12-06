const firebaseConfig = {
    apiKey: "AIzaSyApS2jsMnIIFwjWky2vx0j001p72nvQv-U",
    authDomain: "woofmeowcenter-3ec1a.firebaseapp.com",
    projectId: "woofmeowcenter-3ec1a",
    databaseURL: "https://woofmeowcenter-3ec1a-default-rtdb.firebaseio.com/",
    storageBucket: "woofmeowcenter-3ec1a.appspot.com",
    messagingSenderId: "49546601461",
    appId: "1:49546601461:web:d579ee1f7201ddb9bef6bc"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const dbRef = firebase.database().ref();
  
  const detailsRef = dbRef.child('userdetails');
  detailsRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  });
  function send(){
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var experience = document.getElementById("experience").value;
  var reason = document.getElementById("reason").value;
  var atmosphere = document.getElementById("atmosphere").value;
  var petName = document.getElementById("petName").value;
  detailsRef.push().set({
  name: name,
  address: address,
  number: number,
  email: email,
  experience: experience,
  reason: reason,
  atmosphere: atmosphere,
  petName: petName,
  });
  }
  