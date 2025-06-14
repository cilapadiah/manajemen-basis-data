const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);
 const logical = await collection.find({
    $or: [{ city: "Jakarta" }, { age: { $lt: 25 } }]
    }).toArray();
    console.log("Logical Query (Jakarta OR age < 25):", logical);