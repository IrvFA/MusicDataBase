const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

// Your web app's Firebase configuration
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

form.onsubmit = addData


function addData(e) {
    db.collection("Albums").add({
        title: titleInput.value,
        artist: artist.value,
        genre: genre.value,
        releaseYear: release.value,
        price: price.value,
        stock: stock.value
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}