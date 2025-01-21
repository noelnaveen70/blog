const express=require('express');
const router=express.Router();
router.use(express.json());
const userModel=require('../model/userData')
const jwt=require('jsonwebtoken');
router.post('/login',async(req,res)=>{
    const user=await userModel.findOne({email:req.body.email});  //the first email is the email in the database and the second email is the email in the input field in the login page
    if(!user){
        res.status(404).send({message:'User not found !'});
    }
    try{
        if(user.password==req.body.password){
            const payload={email:user.email,password:user.password};
            const token=jwt.sign(payload,'blogApp');
            res.status(200).send({message:'Login successful',token:token})
        }
        else{
            res.status(400).send({message:'Invalid credentials'})
        }
    }catch(error){
        console.log(error);
    }
})

module.exports=router