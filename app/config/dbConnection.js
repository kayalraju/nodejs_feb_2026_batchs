require('dotenv').config();
const mongoose = require('mongoose');



const ConnectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL || "mongodb+srv://aditiroyinfo2016_db_user:LjV4VJJr1NBRZVGr@cluster0.lgpjrhe.mongodb.net/crudApplication")
        console.log("Database connected")
    }catch(err){
        console.log(err)
    }
}

module.exports=ConnectDb
