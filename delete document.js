const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);
await collection.deleteOne({ name: "Alice" });

await collection.insertMany([
      { name: "Bob", age: 30, city: "Bandung" },
      { name: "Charlie", age: 22, city: "Surabaya" },
      { name: "Diana", age: 28, city: "Jakarta" }
       ]);