db.persons.aggregate([
    {$match: {isactive:true}}
])

db.persons.aggregate([
    {$match:{gender:"female"}}
])
db.persons.aggregate([
    {$group:{_id:"$gender"}} // i will return _id: male and _id: female
])

db.persons.aggregate([{$group:{_id:{eyecolor:"$eyeColor", favoritefruit:"$favoriteFruit"}}},{$sort:{"_id.eyecolor": 1, "_id.favoritefruit":-1}}])

db.persons.aggregate([
    {$group:{_id:{age:"$age", gender:"$gender", eyecolor:"$eyeColor"}}},
    {$match:{"_id.age":{$gt:40}}}
    ])

db.persons.aggregate([{ $match:{age:{$gte:25}}}, { $group:{_id:{age:"$age}}}, { $count:"age"}])
db.persons.aggregate([{$group:{_id:{eyeColor:"$eyeColor", gender:"$gender"}}}, {$count:"eyeColorAndgender"}])

db.persons.aggregate([{$match:{age:{$gte:25}}},{$group:{_id:{age:"$age", eyecolor:"$eyeColor"}}},{$count:"ageandeyecolor"}])

db.persons.aggregate([{$project:
    {_id:0,
    index:1,
    name:1,
    details:{
        eyes:"$eyeColor",
        company:"$company.title",
        country:"$company.location.country"
    }}}])
    db.persons.aggregate([{$match:{eyeColor:{$ne:"blue"}}},{$group:{_id:{eyecolor:"$eyeColor", favoritefruit:"$favoriteFruit"}}},{$sort:{"_id.eyecolor":1,"_id.favoritefruit":-1}},{$limit:4}])

    db.persons.aggregate([{$project:{_id:0, index:1,name:1, eyeColor:1}}])

    db.persons.aggregate([{$unwind:"$tags"},{$project:{name:1, index:1, tags:1}}])

    db.persons.aggregate([{$unwind:"$tags"},{$group:{_id:"$tags"}}])

    db.persons.aggregate([{$group:{_id:"$eyeColor", count:{$sum:1}}}])
    db.persons.aggregate([{$project:{name:1, nameType:{$type:"$name"}, ageType:{$type:"$age"},tagsType:{$type:"$tags"},companyType:{$type:"$company"}}},{$out:"outCollection"}])
    var pipeline = [
        {
          $match: {
            "imdb.rating": { $gte: 7 },
            genres: { $nin: [ "Crime", "Horror" ] } ,
            rated: { $in: ["PG", "G" ] },
            languages: { $all: [ "English", "Japanese" ] }
          }
        }
    
    db.movies.aggregate(pipeline).itcount()

db.persons.find({isActive: true})
db.persons.find({tags:{$size:3}})
db.persons.find({gender:"female"})
db.persons.find({_id:"$gender"})
