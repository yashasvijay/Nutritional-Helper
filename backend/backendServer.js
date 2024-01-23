var Express = require("express");
//const {MongoClient} = require('mongodb');
var Mongoclient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");
var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://user:careerlaunch@cluster0.gu4zxwb.mongodb.net/";

var DATABASENAME="users";
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
})

//SECOND DATABASE FOR FOOD
var DATABASENAME2="food";
var database2;

const config = require("../nutrition-helper/src/components/App.js");

app.listen(8000,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database2=client.db(DATABASENAME2);

        database2.collection("items").count({},function(error,numOfDocs){
            database2.collection("items").insertOne({
                id:(numOfDocs+1).toString(),
                calories: config.calories,
                fat: config.fat,
                cholesterol: config.cholesterol,
                sodium: config.sodium,
                carbohydrate: config.carbohydrate,
                sugar: config.sugar,
                protein: config.protein,
                iron: config.iron,
                potasium: config.potassium
            });

        console.log("Mongo DB Connection Successful (2)");

        })

    });
})