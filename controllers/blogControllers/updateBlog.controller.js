const services =require('../../services');

module.exports={
    async updateBlog(req,res){
        try{
            const{id}=req.params;
            const {bloggeur,title,body}=req.body;
            let existingBlog= await services.blogServices.get.getBlogById(id);
            
            if(existingBlog){
                await services.blogServices.update.updateBlog(id,bloggeur,title,body)
                existingBlog= await services.blogServices.get.getBlogById(id);
                res.status(200).json({message:true,message:"blog updated" , data:existingBlog})
            }else{res.status(404).json({status:false, message:"blog does not exist"})}
        }catch(err){
            console.log(err);
            return err;
        }
    }
}