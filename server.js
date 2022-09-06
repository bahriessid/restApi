const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/User')
dotenv.config({path:'./Config/.env'})

const app = express()

app.use(express.json())

mongoose.connect(process.env.URL ,err=>err? console.log(err): console.log('connected'));

//post
app.post('/api/users', async(req,res)=>{
    try{
    const newUser= new User(req.body)
    const addUser = await newUser.save()
    res.json(addUser)}
    catch(error){
    console.log(error);
    }
})

//get
app.get('/api/users',async(req,res)=>{
    try{
        const users = await User.find({})
        res.json(users)
    }catch (error){
        console.log(error);
    } 
})

//update
app.put('/api/users/:id',async(req,res)=>{
    try{
        const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(updateUser)
    }catch (error){
        console.log(error)
    }
})

//delete
app.delete('/api/users/:id',async(req,res)=>{
    try{
        const deleted=await User.findByIdAndDelete(req.params.id)
        res.json(deleted)
    }catch (error){
        console.log(error)
    }
})


const port = process.env.PORT;
app.listen(port, err=> err? console.log(err):console.log(`this server is running on ${port}`))