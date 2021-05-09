const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {Auth, LoginCredentials} = require('two-step-auth');
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

var otpSent;
var VerifyEmail;

async function login(emailId){
    try {
        const res = await Auth(emailId, "Covidthing");
        console.log(res);
        console.log(res.mail);
        console.log(res.OTP);
        otpSent = res.OTP;
        console.log(res.success);
        VerifyEmail = res.mail;
    } catch (error) {
        console.log(error)
    }
}


app.post('/signup',(req,res)=>{
    console.log(req.body);
    var data = {...req.body,verified:false}
    login(req.body.email);

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

async function verify(otpParam){
    if(otpParam == otpSent){
        
        await users.findOneAndUpdate({email:VerifyEmail},{ $set: { verified: true } });
        const useremail =await users.findOne({email:VerifyEmail});
        console.log(useremail);
        return {message:'successful verification'}
    }
    else{
        return {message:'failed verification'}
    }
}

app.post('/verify',(req,res)=>{
    var otp = req.body.otp;
    const verRes = verify(otp);
    res.send(verRes);
})


app.post("/login",async(req,res)=>{
    try {
        var email = req.body.email;
        var pass = req.body.pass;
        const useremail =await users.findOne({email:email});
        if(useremail.password === pass ){
            res.send({message:"successful login"});
            console.log(email,"logged in")

        }
        else{
            res.send({message:"password is not matching"});
        }
    }
    catch(error){

        res.status(400).send("invalid details");

    }
});