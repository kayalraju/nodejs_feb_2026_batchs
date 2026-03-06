const express=require('express')



const app=express()


//define router
const homeRouter=require('./app/router/homeRoute')
app.use(homeRouter)


const PORT=3005

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})