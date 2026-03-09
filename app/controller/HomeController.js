


class HomeController{

    index(req,res){
       res.render('home',{
           title:'Home Page',
           user:"pritam"
       })
    }

    about(req,res){
        res.render('about',{
            title:'About Page'
        })
    }
   
}




module.exports=new HomeController()