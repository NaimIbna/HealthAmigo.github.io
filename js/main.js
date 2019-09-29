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

var messagesRef = firebase.database().ref('messages');

document.getElementById('submit_button').addEventListener('click', submitForm);

function submitForm(e) {
  e.preventDefault();
  document.querySelector('.alert').style.display = 'block';
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    'name': name,
    'company': company,
    'email': email,
    'phone': phone,
    'message': message
  }).then(x => {
    document.querySelector('.alert').style.display = 'none';
    document.getElementById('contactForm').reset();
    document.location.href = "./index.html";
  });
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}


