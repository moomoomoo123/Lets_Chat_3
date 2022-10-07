user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =
"Welcome " + user_name + "!";

{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() { firebase.database().ref("/").on('value', function(snapshot)
{ document.getElementById("output").innerHTML = " ";
snapshot.forEach(function(childSnapshot)
{ childKey = childSnapshot.key;

      Room_names = childKey;
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+
      "onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

});
});
}

const firebaseConfig = {

      apiKey: "AIzaSyDvayAeoG-Ks_w5UF8yL-37OJfclwBoE8c",
    
      authDomain: "kwitter-a49da.firebaseapp.com",
    
      projectId: "kwitter-a49da",
    
      storageBucket: "kwitter-a49da.appspot.com",
    
      messagingSenderId: "353183999659",
    
      appId: "1:353183999659:web:62a1bbdf8f5169c64cf9ee"
    
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


