const express=require('express')
const ejs=require('ejs')



const app=express()


//define ejs
app.set('view engine','ejs')
app.set('views','views')

//define router
const homeRouter=require('./app/router/homeRoute')
app.use(homeRouter)


const PORT=3005

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})