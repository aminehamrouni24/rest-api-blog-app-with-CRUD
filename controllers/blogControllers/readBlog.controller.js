const services =require('../../services');

module.exports={
    async getBlogList(req,res){
        try{
     const blogList =await services.blogServices.get.getBlogList()
     res.status(201)
     .json({status: true,message:"all the blogs", data : blogList})
        }catch(err){
            res.status(500)
            .json({status:false,message:err})
        }
    }
}

