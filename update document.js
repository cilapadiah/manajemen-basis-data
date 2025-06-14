const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);

await collection.updateOne({ name: "Alice" }, { $set: { age: 26 } });