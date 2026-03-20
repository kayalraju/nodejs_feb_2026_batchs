require('dotenv').config()
const express=require('express')
const ejs=require('ejs')
const path=require('path')
const ConnectDb=require('./app/config/dbConnection')



const app=express()

ConnectDb()


//define ejs
app.set('view engine','ejs')
app.set('views','views')

//define a static public folder
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

//define router
const homeRouter=require('./app/router/homeRoute')
app.use(homeRouter)


const PORT=3005

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})