const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {Auth, LoginCredentials} = require('two-step-auth');
const dotenv =require('dotenv');
dotenv.config();
const requestRouter = require('./routes/request');
const app = express();


app.use(express.json())
app.use(cors());
app.use('/newrequest',requestRouter);

app.listen(3000, ()=>{
    console.log("connected to server");
})


mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
     useFindAndModify: false
});



const db = mongoose.connection;

db.on('error',()=>{console.log("error")});
db.once('open',()=>{console.log("connected to db")});

// const user = db.collection('user');
const userSchema = new mongoose.Schema({
    name:String,
    phNo:String,
    altPhNo:String,
    email:String,
    password:String,
    confPass:String,
    open:Boolean,
    verified:Boolean
});
const user = mongoose.model('user',userSchema);


var otpSent;
var VerifyEmail;

//two-step-auth

async function login(emailId){
    try {
        const res = await Auth(emailId, "Covidthing");
        console.log(res);
        console.log(res.mail);
        console.log(res.OTP);
        otpSent = res.OTP;
        console.log(res.success);
        
    } catch (error) {
        console.log(error)
    }
}

//Sign-up



app.post('/signup',async(req,res)=>{
    VerifyEmail = req.body.email;
    user.findOne({email:req.body.email})
    .then(useremail =>{
        if(useremail && useremail.verified === true){
            throw new Error('user already exists1');
        }
        else if(useremail){
            console.log('delete');
            user.deleteOne({email:useremail.email},(err)=>{if(err){console.log(err)}});
        }
    })
    .then(() =>{
        var data = {...req.body,verified:false}
        login(req.body.email);
        var userDet = new user({...req.body,verified:false});
        userDet.save((err,userDet)=>{
            if(err){
                console.log("err",err)
                throw err;
                
            }
            else{
                console.log("Register successfull");
                res.send({"message":"successfull"})
            }
        })
    })
    .catch(err => {
        console.log('user already exists2',err);
        res.send({message:'errorrrr'});
    })
    
})




//Verify

async function verify(otpParam){
    if(otpParam == otpSent){
        
        await user.findOneAndUpdate({email:VerifyEmail},{ $set: { verified: true } });
        const useremail =await user.findOne({email:VerifyEmail});
        return {message:'successful verification'}
    }
    else{        
        user.deleteOne({email:VerifyEmail});
        return {message:'failed verification'}
        
    }
}


app.post('/verify',async(req,res)=>{
    var otp = req.body.otp;
    const verRes = await verify(otp);
    res.send(verRes)
})

//Log in

app.post("/login",async(req,res)=>{
        var email = req.body.email;
        var pass = req.body.pass;
        user.findOne({email:email})
        .then(useremail =>{
            console.log(useremail)
            if(useremail.password === pass ){
                if(useremail.verified===true){
                    res.send({message:"successful login"});
                    console.log(email,"logged in")
                }
                else{
                    res.send({message:'user does not exist'})
                }
    
            }
            else{
                res.send({message:"Invalid credentials"});
            }
        })
    .catch(error=>{

        console.log("user does not exist");
        res.send({message:'User is not registered'})

    })
});