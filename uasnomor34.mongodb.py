from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")
# Membuat database dan collection untuk wide-column
db_wc = client["wide_column_db"]
collection_wc = db_wc["users"]

collection_wc.delete_many({})
collection_wc.insert_many([
    {"username": "user1", "nama": "Ayu", "umur": 22, "email": "ayu@mail.com"},
    {"username": "user2", "nama": "Budi", "umur": 25, "alamat": "Jakarta"},
    {"username": "user3", "nama": "Citra", "umur": 28, "email": "citra@mail.com", "status": "aktif"},
    {"username": "user4", "nama": "Dian", "umur": 30, "alamat": "Bandung", "status": "nonaktif"},
    {"username": "user5", "nama": "Eka", "umur": 24, "kota": "Surabaya"}
])

print("\nData Wide-Column")
for data in collection_wc.find():
    print(data)
