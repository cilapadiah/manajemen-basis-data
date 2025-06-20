from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")

# Membuat database dan collection untuk key-value
db_kv = client["key_value_db"]
collection_kv = db_kv["kv_data"]

collection_kv.delete_many({})
