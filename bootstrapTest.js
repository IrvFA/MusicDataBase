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
    $("#albumForm").submit(function() {
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
        return this.some_flag_variable;
      });
});

function addData(db) {
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
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    return this.some_flag_variable;
  }

  function removeData(db) {
    $("#demo").html("Welcome");
    db.collection("Albums").remove({
        title: $("#albumName").val(),
        artist: $("#artistName").val(),
        genre: $("#genre").val(),
        releaseYear: $("#releaseYear").val(),
        price: $("#price").val(),
        stock: $("#stock").val()
        $(".deleteBtn").bind("click", Delete)
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            $("#alert").empty();
            $('.parent').append("<div class='alert alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Success! message sent successfully.</div>")
        })
        .catch(function (error) {
            console.error("Error deleting document: ", error);
        });
    return this.some_flag_variable;
  }
  var adaRef = firebase.database(db).ref(docRef.id);
adaRef.remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  });
  
  $("body").on("click", ".btn-delete", function(){
    $("demo").parents("tr").remove();
    
function Delete(){
    var par = $(this).parent("#demo").parent()
    par.remove()
}
}
}
