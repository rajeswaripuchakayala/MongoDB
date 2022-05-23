
Aggregation in MongoDB

- Aggregation is very similar to the find command, where you can provide the criteria for your query in the form of JSON documents
- The key element in aggregation is called Pipeline
- It also helps us in performing few operations like min, max, sum, etc.,
- The command to use Aggregation is 
    db.collectionName.aggregate(pipeline, options)
    - pipeline
        - A sequence of data aggregation operations or stages
        - pipeline is an array
    - options
        - documents can be passes as well

Aggregation stages
    - $count
    - $group
    - $limit
    - $lookup
    - $match
    - $merge
    - $sort
    - $project
    - $unwind
    - $unset and many more

