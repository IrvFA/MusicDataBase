import Dexie from 'dexie';

// Create needed constants

const list = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('form');
const submitBtn = document.querySelector('form button');

var db = new Dexie('MyMusicStoreDB');

db.version(1).stores({
    Album: "++albumID, title, artist, genre, releaseYear, price, stock",
    Label: "++labelID, name, country",
    Artists: "++artistID, [firstName +lastName], nationality, nationality, birthDate",
    Client: "++clientID, [firstName + lastName], telephone, email",
    Producer: "++producerID; [firstName + lastName], nationality"
});

db.open().catch (function (err) {
    alert('Failed to open db: ' + (err.stack || err));
});

displayData();
form.onsubmit = addData

function addData(e){
    e.preventDefault();
    let newItem = { title: titleInput.value, artist: artist.value, genre: genre.value, releaseYear: release.value, price: price.value, stock: stock.value};
        Album.add(newItem).then(function(){
            alert("Album has been added");
        }).catch(function(error) {
            alert("Oops " +error);            
        });
        displayData();

    transaction.on("complete", function(){
        alert("Transaction completed");
        console.log('Transaction completed: database modification finished.');
    });
    transaction.on("error", function(){
        alert("Transaction failed");
        console.log('Transaction failed: database modification finished.');
    })
}

function displayData(){
// Here we empty the contents of the list element each time the display is updated
// If you didn't do this, you'd get duplicates listed each time a new note is added
    while (list.firstChild) {
        list.removeChild(list.firstChild);
      }

      let objectStore = db.transaction()
}

