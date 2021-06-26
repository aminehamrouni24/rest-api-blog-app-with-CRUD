const router =require('express').Router();
const controllers =require('../../controllers');
const blogControllers = require('../../controllers/blogControllers');


router.post('/createBlog', controllers.blogControllers.create.createBlog);
router.get('/blogList', controllers.blogControllers.get.getBlogList);
router.delete('/deleteBlog/:id',controllers.blogControllers.delete.deleteBlog);
router.put('/updateBlog/:id', controllers.blogControllers.update.updateBlog)
module.exports=router