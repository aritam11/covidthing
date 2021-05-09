const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.use(express.json())
app.use(cors())

app.listen(3000, ()=>{
    console.log("connected to server");
})

mongoose.connect('mongodb://localhost:27017/coviddb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on('error',()=>{console.log("error")});
db.once('open',()=>{console.log("connected to db")});

const users = db.collection('users');


app.post('/signup',(req,res)=>{
    console.log(req.body);

    var data = req.body;

    users.insertOne(data,(err,collection)=>{
                if(err){
                    throw err;
                }
                else{
                    console.log("Register successfull");
                    res.send({"message":"successfull"})
                }


    })
})


app.post("/login",async(req,res)=>{
    try {
        var email = req.body.email;
        var pass = req.body.pass;
        const useremail =await users.findOne({email:email});
        if(useremail.password === pass ){
            res.send({message:"successful login"})

        }
        else{
            res.send({message:"password is not matching"});
        }
    }
    catch(error){

        res.status(400).send("invalid details");

    }
});