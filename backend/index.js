var Express = require("express");
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://user:careerlaunch@cluster0.gu4zxwb.mongodb.net/";

/*var DATABASENAME="users";
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
            username:request.body.newUsers,
            password:request.body.newPass
        });
        response.json("Added Successfully");
    })
})

app.delete("/deleteitems",(request,response)=>{
    database.collection("items").deleteOne({
        id:request.query.id
    });
    response.json("Deleted Successfully");
})*/


//SECOND DATABASE FOR FOOD -- add this below whats already in index.js
var DATABASENAME2="food";
var database2;

app.listen(8000,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database2=client.db(DATABASENAME2);

        database2.collection("items").count({},function(error,numOfDocs){
                database2.collection("items").insertOne({
                id:(numOfDocs+1).toString(),
                name: "Orange",
                calories: "62",
                fat: "0.2",
                cholesterol: "0",
                sodium: "0",
                carbohydrate: "15.4",
                sugar: "12.2",
                protein: "1.2",
                iron: "245",
                potasium: "237"
            });
            database2.collection("items").insertOne({
                id:(numOfDocs+1).toString(),
                name: "Apple",
                calories: "95",
                fat: "0.3",
                cholesterol: "0",
                sodium: "1",
                carbohydrate: "25",
                sugar: "18.9",
                protein: "0.5",
                iron: "0.2",
                potasium: "195"
            });

        console.log("Mongo DB Connection Successful (2)");

        })

    });
})

app.get('/getitems2',(request,response)=>{
    database2.collection("items").find({}).toArray((error,result)=>{
        response.send(result);
    })
})

app.delete("/deleteitems2",(request,response)=>{
    database2.collection("items").deleteOne({
        id:request.query.id
    });
    response.json("Deleted Successfully");
})