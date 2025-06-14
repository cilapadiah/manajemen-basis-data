const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);
const gt25 = await collection.find({ age: { $gt: 25 } }).toArray();
console.log("Comparison Query (age > 25):", gt25);