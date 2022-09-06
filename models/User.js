const mongoose = require('mongoose')

const userSchema =mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    age: Number,
    favoriteFoods: {
        type:[String],
        required:true
    },   
});

module.exports=mongoose.model('User',userSchema)