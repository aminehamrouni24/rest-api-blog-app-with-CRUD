const Blog = require('../../model/Blog'); 
module.exports={
    async createBlog(bloggeur,title,body){
        try{
     return await Blog.create({bloggeur,title,body})
        }catch(err){
            if (err)throw err
            console.log(err)
        }
    }
}