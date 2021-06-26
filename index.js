//require all the needed modules
const express =require('express');
const app = express();
require('dotenv').config();
const mongoose=require('mongoose');
app.use(express.json())
app.use(require('./routes'))
PORT =process.env.PORT || 4000;
DB =process.env.DB
//connecting the database
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}) 
.then(()=>{
    console.log('the database is connected')})
.catch((err)=>{
    console.log(err)
})    
 


//Server on to listening requests
app.listen(PORT,(err)=>{
if (err)throw err
console.log(`server is running on port :${PORT}`)
})
