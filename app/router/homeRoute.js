const express=require('express')
const HomeController = require('../controller/HomeController')

const Router=express.Router()



Router.get('/',HomeController.index)
Router.get('/about',HomeController.about)
Router.get('/contact',HomeController.contact)


module.exports=Router


