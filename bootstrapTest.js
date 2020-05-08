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


$(document).ready(function () {
    // all custom jQuery will go here
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    $("addBtn1").submit(addData(db));
});

function addData(db,e) {
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
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}
