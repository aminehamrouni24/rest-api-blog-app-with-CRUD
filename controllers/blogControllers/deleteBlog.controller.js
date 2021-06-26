const services=require('../../services');


module.exports={
    async deleteBlog(req,res){
        try{
            const{id}=req.params;
    const deletedBlog= await services.blogServices.delete.deleteBlog(id)
    res.status(201)
    .json({status:true,message:'blog deleted successfully', data:deletedBlog})
        }catch(err){
            res.status(500).json({status:false,message:err})
        }
    }
}