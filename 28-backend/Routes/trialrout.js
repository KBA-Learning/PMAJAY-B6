import { Router } from "express";
import bcrypt from 'bcrypt';

const router = Router();
const user = new Map();

router.get('/hi',(req,res)=>{
    console.log("HI World");
    res.send("Hi World")
})

router.post('/signup',async(req,res)=>{
    
    // const details = req.body
    // console.log(details.FirstName);
    try{
    const {FirstName,LastName,UserName,Password,UserRole}= req.body
    console.log(FirstName);
    try{
    const newPassword = await bcrypt.hash(Password,10)
    console.log(newPassword);
    const result = user.get(UserName)
    if(result){
        res.status(400).json({msg:'Username already exist'})
    }
    else{
    user.set(UserName,{FirstName,LastName,newPassword,UserRole})
    // res.status(201).json({msg:'Successfullly created'});
    res.status(201).send('Successfullly created');
    }}
    catch{
        res.status(404).json({msg:"Something went wrong on bcrypt"})
    }
    }
    catch{
        res.status(500).send(error)
    }
})

router.post('/login',async(req,res)=>{
    const {UserName,Password} = req.body
    const result = user.get(UserName)
    if(!result){
        res.status(404).json({msg:'UserName not registered'})
    }
    const valid =await bcrypt.compare(Password,result.newPassword)
    console.log(valid);
    res.status(200).send("signed up successfully")
})

export  {router};