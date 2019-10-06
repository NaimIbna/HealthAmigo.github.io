var firebaseConfig = {
  apiKey: "AIzaSyCfllTVi8y7aCfskgsyksczfx9Y93Mof7k",
  authDomain: "healthamigo-contact.firebaseapp.com",
  databaseURL: "https://healthamigo-contact.firebaseio.com",
  projectId: "healthamigo-contact",
  storageBucket: "",
  messagingSenderId: "455247301314",
  appId: "1:455247301314:web:da644092326d8b666c895b"
};
firebase.initializeApp(firebaseConfig);

var inputUserame = document.getElementById('inputUserame');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var inputConfirmPassword = document.getElementById('inputConfirmPassword');
var register = document.getElementById('register');
var warning = document.getElementById('warning');

register.addEventListener('click', ref => {
  ref.preventDefault();
  var username = inputUserame.value;
  var email = inputEmail.value;
  var password = inputPassword.value;
  var confirmPassword = inputConfirmPassword.value;
  
  if(password.length < 6) warning.style.display = "block";
  else{
warning.style.display = "none";
  if (username.length && email.length && password.length && confirmPassword.length) {
    if (password == confirmPassword) {
      const aut = firebase.auth().createUserWithEmailAndPassword(email, password).then(cred => {

        var ref = "users";
        var userRef = firebase.database().ref(ref);
        var newMessageRef = userRef.push();
        newMessageRef.set({
          'username': username,
          'email': email,
          'password': password
        }).then(x=>{
          document.location.href = "./index.html";
        });
      }).catch(e => {
          console.log("Connection Error!  id:" + e.message);
          document.getElementById('alreadyExistAlert').style.display = "block";
        });
    } else {
      console.log("Password Didn't march");
	  document.getElementById('wrong').style.display = "block";
    }
  } else {
    console.log("Field can't be empty!");
  }
  }
});