const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);
await collection.bulkWrite([
      { insertOne: { document: { name: "Eve", age: 35, city: "Bali" } } },
      { updateOne: { filter: { name: "Bob" }, update: { $set: { age: 31 } } } },
      { deleteOne: { filter: { name: "Charlie" } } }
    ]);