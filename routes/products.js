const express=require('express');
const router=express.Router();
const ProductController=require('../controllers/products')

router.get('/home',(req,res)=>{
    console.log(req.body)
    return res.send('home')
})

router.post('/addProduct',ProductController.addProduct)

router.delete('/delProduct/:id',ProductController.delProductById)

router.get('/getProduct/:id',ProductController.getProductById);

router.post('/updateProduct/:id',ProductController.updateProduct)

router.get('/getAll',ProductController.getAll)
 
module.exports=router