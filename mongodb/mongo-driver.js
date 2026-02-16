import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1");

await client.connect();

const db = client.db('mongodb_nodejs_db');
const userCollection = db.collection("users");

// userCollection.insertOne({name: "Proshanta", age: 30});

// userCollection.insertMany([
//     {name: "Proshanta1", role: "user", age: 31},
//     {name: "Proshanta2", role: "user", age: 32},
//     {name: "Proshanta3", role: "user", age: 33},
//     {name: "Proshanta4", role: "admin", age: 34}
// ])


//Read
// const usersCursor = await userCollection.find().toArray();
// console.log(usersCursor);


// const usersCursor = userCollection.find();

// for await (const user of usersCursor){
//     console.log(user);
    
// }

// const user = await userCollection.findOne({name: "Proshanta2"});
// console.log(user);

// console.log(user._id.toHexString());

//Update

await userCollection.updateOne({name: "Proshanta2"}, {$set: {age: 30}})

