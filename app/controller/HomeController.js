

 const student={
        name:"subir",
        age:22
    }

class HomeController{


   
    index(req,res){
       res.render('home',{
           title:'Home Page',
           user:"pritam",
           student
       })
    }

    about(req,res){
        res.render('about',{
            title:'About Page'
        })
    }


    contact(req,res){
        res.render('contact',{
            title:'Contact Page'
        })
    }




    
}




module.exports=new HomeController()