//  creating server

const express = require('express')
const app = express();
const cors = require('cors')
const port = 5000;
const products_routes = require("./routes/routes")

app.use(express.json());
app.use(cors());
app.listen( port,()=>{
    console.log("server started")
});


// connecting database

const mongoose = require('mongoose');
const database = mongoose.connection;
mongoose.connect("mongodb+srv://shoaib1010:memon2008@cluster0.f2mgrod.mongodb.net/staff");
database.on('error',(err)=>{
    console.log(err)
});
database.once('connected',()=>{
console.log('Database Connected');
})

// creating schemma

const teacherschemma = new mongoose.Schema({
    Name : {
        required : true,
        type : String
    },
    age : {
        required : true,
        type : Number
    }
});

// creating modal 

const Teachermodal = mongoose.model("Data",teacherschemma,"teachers");

// creating create request using post;

app.post('/',async (req ,res)=>{
    const savedData = Teachermodal({
        Name : req.body.name ,
        age : req.body.age ,

    });
    try{
        const savingData = await savedData.save()
        res.send("data saved")
    }
    catch{
        res.send("Data not saved")
    }
    
})

// middleware or to set router
app.use("/api/products",products_routes );