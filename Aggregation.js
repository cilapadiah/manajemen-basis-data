const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);
const avg = await collection.aggregate([
      { $group: { _id: null, avgAge: { $avg: "$age" } } }
    ]).toArray();
    console.log("Average Age (Aggregation):", avg);