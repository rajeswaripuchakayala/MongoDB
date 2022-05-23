
Queries
    - using find method of MongoDB with operators
    - Eq
    - lt - less than
    - lte - less than or equal to
    - gt - greater than
    - gte - greater than or equal to
    - $and
    - $or

find with condition
    - db.collectionName.find({"Tax": 30})
find method with multiple conditions (AND by default)
    - db.collectionName.find({"Tax": 30, "salary": "120000"})
find method with Tax less than or equal to 30
    - db.collectionName.find({"Tax": {$lte: 30}})
find methos with Tax grather than 30
    - db.collectionName.find({"Tax":{$gt: 30}})
find mehtod with $eq (by default find method has equal)
    - db.collectionName.find({"Tax": 30})
And operator with find method
    - db.collectionName.find({$and:[{"Tax": 30},{"salary": {$lte:120000}}]})
OR operator with find
    - db.collectionName.find({$or:[{"Tax":30},{"salary": {$gte:100000}}]})


Find specific fields (Projection)

    selecting fields
        - db.collectionName.find() --> all documents are returned
        - db.collectionName.find({}, {"city": 1}) -->get city key and _id (by defalut) from all documents in the collection
        if you don't need _id 
            - db.collectionName.find({},{"city": 1, _id: 0})
        if you need specific fields from documnets from collection
            - db.collectionName.find({condition}, {"Tax": 1, "_id": 0})
            - db.collectionName.find({"Tax": {$lte: 30}},{"city": 1, "_id":0})
        
Projection
    - By default it will bring up all keys/values from all documents in collection
    - db.leads.find({"Tax": 30})
    - number of documents will reduce
        - 60 keys
        - we do not need all keys
        - we need only few keys