var firebaseConfig = {
    apiKey: "AIzaSyB75zHmNBBXFz1SrOxYTFoph4xCkkUoS2Q",
    authDomain: "class-94-ea574.firebaseapp.com",
    databaseURL: "https://class-94-ea574-default-rtdb.firebaseio.com",
    projectId: "class-94-ea574",
    storageBucket: "class-94-ea574.appspot.com",
    messagingSenderId: "286900294926",
    appId: "1:286900294926:web:d3aa0f36ef579a85d6b35f",
    measurementId: "G-5WCF0KNQB3"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addroom() {
    Room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", Room_name);
    window.location = "kwitter_room.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("roomname- " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}