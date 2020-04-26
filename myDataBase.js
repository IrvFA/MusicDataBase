import Dexie from 'dexie';


var db = new Dexie('MusicStoreDB');


db.version(1).stores({
    Album: "++albumID, title, labelID, genre, releaseYear, price, stock",
    Label: "++labelID, name, country",
    Artists: "++artistID, [firstName +lastName], nationality, nationality, birthDate",
    Client: "++clientID, [firstName + lastName], telephone, email",
    Producer: "++producerID; [firstName + lastName], nationality"
});

var Album = db.Album.defineClass ({
    albumID: Number,
    title: String,
    label: Label,
    genre: String,
    releaseYear: Date,
    price: Number,
    stock: Number,
})

var Label = db.Label.defineClass ({
    labelID: 
})