
const database = 'Arsila Nurfadiah';
const collection = 'UAS_MBD';


use(database);


db.createCollection(collection);
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
  await client.connect();
  const db = client.db("demoDB");

  await db.createCollection("validatedUsers", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "age"],
        properties: {
          name: { bsonType: "string" },
          age: { bsonType: "int" }
        }
      }
    }
  });

  console.log("Collection dengan schema validation berhasil dibuat.");
  await client.close();
}

main();
