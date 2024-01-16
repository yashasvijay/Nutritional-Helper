var Express = require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://user:careerlaunch@cluster0.gu4zxwb.mongodb.net/";

var DATABASENAME="food";
var database;

app.listen(9000,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongo DB Connection Successful");
    });
})

app.get('/getitems',(request,response)=>{
    database.collection("items").find({}).toArray((error,result)=>{
        response.send(result);
    })
})

app.post('/additems',multer().none(),(request,response)=>{
    database.collection("items").count({},function(error,numOfDocs){
        database.collection("items").insertOne({
            id:(numOfDocs+1).toString(),
            name:request.body.newItems,
            calories:request.body.newCals
        });
        response.json("Added Successfully");
    })
})

app.delete("/deleteitems",(request,response)=>{
    database.collection("items").deleteOne({
        id:request.query.id
    });
    response.json("Deleted Successfully");
})