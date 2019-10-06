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


const login = document.getElementById('login_button');
const mail = document.getElementById('inputUsername');
const pw = document.getElementById('inputPassword');


login.addEventListener('click', e => {
  e.preventDefault();
  const email = mail.value;
  const password = pw.value;
  const aut = firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
    console.log("Logged In");
    document.location.href = "./index.html?Login=Successful";
  }).catch(e=>{
  	window.alert("Error :"+e.message);
    console.log("Error!  id: "+e.message);
  });

});