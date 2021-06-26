const Blog =require('../../model/Blog');


module.exports={
    async updateBlog(id,bloggeur,title,body){
        try{
            return await Blog.findByIdAndUpdate(id,{bloggeur,title,body})
        }catch(err){
            console.log(err)
            return err
        }
    }
}