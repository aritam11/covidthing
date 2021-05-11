const express = require('express');
const router = express.Router();


router.get('/plasma',(req,res)=>{
    console.log("plasma req");
    res.send({message:'PLASMA'});
});

router.get('/oxygen',(req,res)=>{
    console.log("oxy req");
    res.send('OXY');
});

router.get('/medicines',(req,res)=>{
    console.log("med req");
    res.send({message:'MED'});
});

module.exports = router;