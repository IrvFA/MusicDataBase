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
});

function addData() {
    if ($("#albumName").val() != " " && $("#artistName").val().toString() != "" && $("#genre").val() != "" && $("#releaseYear").val() != "" && $("#price").val() != "") {
        $("#demo").html("Welcome");
        db.collection("Albums").add({
            title: $("#albumName").val(),
            artist: $("#artistName").val(),
            genre: $("#genre").val(),
            releaseYear: $("#releaseYear").val(),
            price: $("#price").val(),
            stock: $("#stock").val()

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
    }
    return this.some_flag_variable;
}

// Lee documentos
function updateTable() {
    var artistTable = document.getElementById("albumTable");
    db.collection("Albums").get().then((querySnapshot) => {
        artistTable.innerHTML = "";
        querySnapshot.forEach((doc) => {
            artistTable.innerHTML += `
                <tr>
                <th scope="row">${doc.id}</th>
                <td>${doc.data().title}</td>
                <td>${doc.data().artist}</td>
                <td>${doc.data().genre}</td>
                <td>${doc.data().releaseYear}</td>
                <td>${doc.data().price}</td>
                <td>${doc.data().stock}</td>
                <td><button class = "btn btn-danger" onclick = "deleteAlbum('${doc.id}')">Delete</button></td>
                <td><button class = "btn btn-warning" onclick = "updateAlbum('${doc.id}','${doc.data().title}', '${doc.data().artist}', '${doc.data().genre}', '${doc.data().releaseYear}', '${doc.data().price}', '${doc.data().stock}')">Modify</button></td>
              </tr>
                `
        });
    });
}

function deleteAlbum(id) {
    db.collection("Albums").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
        updateTable();
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

//Update firebase

function updateAlbum(id, title, artist, genre, releaseYear, price, stock){

    document.getElementById("albumName").value = title;
    document.getElementById("artistName").value = artist;
    document.getElementById("genre").value = genre;
    document.getElementById("releaseYear").value = releaseYear;
    document.getElementById("price").value = price;
    document.getElementById("stock").value = stock;
    var button = document.getElementById("addBtn1");
    button.innerHTML = "Update";

    button.onclick = function(){

        var currentAlbum = db.collection("Albums").doc(id);


        return currentAlbum.update({
            title: $("#albumName").val(),
            artist: $("#artistName").val(),
            genre: $("#genre").val(),
            releaseYear: $("#releaseYear").val(),
            price: $("#price").val(),
            stock: $("#stock").val()
        })
        .then(function() {
            console.log("Document successfully updated!");
            button.innerHTML = "Add";
            document.getElementById("albumName").value = "";
            document.getElementById("artistName").value = "";
            document.getElementById("genre").value = "";
            document.getElementById("releaseYear").value = "";
            document.getElementById("price").value = "";
            document.getElementById("stock").value = "";

            updateTable();
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

    }


}