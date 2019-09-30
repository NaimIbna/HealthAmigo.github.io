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

function createTable() {
  var table = document.getElementById('table_body');

  var refEmail = "messages";
  var emailsRef = firebase.database().ref(refEmail);
  emailsRef.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);
    
    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
	  
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = alldata[index].name;
        cell2.innerHTML = alldata[index].company;
        cell3.innerHTML = alldata[index].email;
		cell4.innerHTML = alldata[index].message;
    }
  }, errEmailsData);
}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}

createTable();
