const Blog = require('../../model/Blog');

module.exports={
    async deleteBlog(id){
        try{
     return await Blog.findByIdAndDelete(id)

        }catch(err){
            console.log(err)
            if (err)throw err 
        }
    }
}