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

$(document).ready(function (){
    /* Custom JQuery Space 

    
    
    */

   firebase.initializeApp(firebaseConfig);
   var db = firebase.firestore();

   $("#albumForm").submit(function(){
       $("#demo").html("Welcome");

       db.collection("Albums").add({
        name: $("#albumName").val(),
        releaseYear: $("#releaseYear").val().toString(),
        genre: $("#genre").val(),
        price: $("#price").val(),
        stock: $("#stocl").val()

    })

         .then(function (docRef){
            console.log("Document written with ID: ", docRef.id);
         })

         .catch(function (error) {
            console.error("Error adding document: ", error);
        });

        return this.some_flag_variable;

    
   });

});
