const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);

//Create Document
await collection.insertOne({ name: "Alice", age: 25, city: "Jakarta" });

