


class HomeController{

    index(req,res){
        res.send('Home Page')
    }

    about(req,res){
        res.send('About Page')
    }
   
}




module.exports=new HomeController()