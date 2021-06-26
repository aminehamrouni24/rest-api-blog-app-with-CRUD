const mongoose=require('mongoose');

const Schema= mongoose.Schema;
const blogSchema= new Schema({
    bloggeur:{type:String,required:true},
    title:{type:String, required:true},
    body:{type:String ,required:true},
    created_at: { type: Date, required: true, default: Date.now }

})

module.exports=blog=mongoose.model('Blog',blogSchema);