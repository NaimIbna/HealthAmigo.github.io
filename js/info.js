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

var rootRef = firebase.database().ref().child("messages");

rootRef.on("child_added", snapshot =>{

	var name = snapshot.child("name").val();
	var company = snapshot.child("company").val();
	var email = snapshot.child("email").val();
	var phone = snapshot.child("phone").val();
	var message = snapshot.child("message").val();

	$("#table_body").append("<tr><td>" + name + "</td><td>" + company + "</td><td>" + email + "</td><td>" + phone + "</td><td>" + message + "</td><td><button>Remove</button></td></tr>");
});