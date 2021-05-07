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


app.post('/signup',(req,res)=>{
    console.log(req.body);

    var data = req.body;

    db.collection('users').insertOne(data,(err,collection)=>{
                if(err){
                    throw err;
                }
                else{
                    console.log("Register successfull");
                    res.send({"message":"successfull"})
                }


    })
})
