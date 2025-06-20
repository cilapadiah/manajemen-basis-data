from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")

# Membuat database dan collection untuk key-value
db_kv = client["key_value_db"]
collection_kv = db_kv["kv_data"]

collection_kv.delete_many({})
collection_kv.insert_many([
    {"_id": "key1", "value": "Halo Dunia"},
    {"_id": "key2", "value": "Belajar MongoDB"},
    {"_id": "key3", "value": "Python Mantap"},
    {"_id": "key4", "value": "Key Value Simpel"},
    {"_id": "key5", "value": "NoSQL Sangat Fleksibel"}
])

print("Data Key-Value")
for data in collection_kv.find():
    print(data)
