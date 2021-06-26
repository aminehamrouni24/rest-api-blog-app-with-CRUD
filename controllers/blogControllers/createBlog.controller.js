const services= require('../../services')

module.exports={
    async createBlog(req,res){
        const{bloggeur,title,body}=req.body;
        try{
        const newBlog =await services.blogServices.create.createBlog(bloggeur,title,body)
        res.status(201)
        .json({status:true,message:'blog added ', data : newBlog})
        }catch(err){
            res.status(500)
            .json({status:false,message:err})
        }
    }
}