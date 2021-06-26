const Blog = require('../../model/Blog');

module.exports={
    async getBlogList(){
        try{
       return await Blog.find({})
        }catch(err){
            if (err)throw err
            console.log(err)
        }
    },

    async getBlogById(id){
        try{
       return await Blog.findById(id)
        }catch(err){
            console.log(err)
            if (err) throw err
        }
    }
}
