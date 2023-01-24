const express=require('express');
const router=express.Router();
const userController=require('../controllers/users')

router.get('/home',(req,res)=>{
    console.log(req.body)
    return res.send('home')
})

router.post('/addUser',userController.addUser)

router.delete('/delUser/:id',userController.delUserById)

router.get('/getUser/:id',userController.getUserById);

router.post('/updateUser/:id',userController.updateUser)
 
module.exports=router