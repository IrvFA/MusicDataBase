var firebaseConfig = {
    apiKey: "AIzaSyBwcS67sfF1ucVVXoJhADAu1FvU4A4vL-0",
    authDomain: "musicstoredb.firebaseapp.com",
    databaseURL: "https://musicstoredb.firebaseio.com",
    projectId: "musicstoredb",
    storageBucket: "musicstoredb.appspot.com",
    messagingSenderId: "1062287219601",
    appId: "1:1062287219601:web:a1f76b94b6685c360b5830",
    measurementId: "G-05R68BMFPF"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
updateTable();


$(document).ready(function () {
    // all custom jQuery will go here
    //$("#artistForm").submit(addData); <-- se hace directo en el script de html
});


function addData() {
        
    $("#demo").html("Welcome");
    db.collection("Artists").add({
        name: $("#artistName").val(),
        birthday: $("#birthday").val().toString(),
        nationality: $("#nationality").val()
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            $("#alert").empty();
            $('.parent').append("<div class='alert alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Success! message sent successfully.</div>")
            updateTable();
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    
    return this.some_flag_variable;
  }

  //Read from firebase
function updateTable(){
var artistTable = document.getElementById("artistTable");
db.collection("Artists").get().then((querySnapshot) => {
    artistTable.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        artistTable.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().name}</td>
        <td>${doc.data().birthday}</td>
        <td>${doc.data().nationality}</td>
        <td><button class = "btn btn-danger" onclick = "deleteArtist('${doc.id}')">Delete</button></td>
        <td><button class = "btn btn-warning" onclick = "updateArtist('${doc.id}','${doc.data().name}','${doc.data().birthday}','${doc.data().nationality}')">Modify</button></td>
      </tr>
        `
    });
});
}

//Delete from firebase
function deleteArtist(id){
db.collection("Artists").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
    updateTable();
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

//Update firebase

function updateArtist(id, name, birthday, nationality){

    document.getElementById("artistName").value = name;
    document.getElementById("birthday").value = birthday;
    document.getElementById("nationality").value = nationality;
    var button = document.getElementById("addBtn1");
    button.innerHTML = "Update";

    button.onclick = function(){



        var currentArtist = db.collection("Artists").doc(id);

        var aName = $("#artistName").val();
        var aBirthday = $("#birthday").val().toString();
        var aNationality = $("#nationality").val();

        return currentArtist.update({
            name: aName,
            birthday: aBirthday,
            nationality: aNationality
        })
        .then(function() {
            console.log("Document successfully updated!");
            button.innerHTML = "Add";
            document.getElementById("artistName").value = "";
            document.getElementById("birthday").value = "";
            document.getElementById("nationality").value = "";

            updateTable();
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

    }


}