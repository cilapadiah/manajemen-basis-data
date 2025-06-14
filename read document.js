const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);

const docs = await collection.find({}).toArray();
console.log("All Documents:", docs);