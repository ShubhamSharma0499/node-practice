const express=require('express');

const app=express();



// add middleware
app.use((req,res,next)=>{ // this function will be called for every request 
    console.log('middleware called');
    next(); //this is used to pass control to next middleware else there will no furthur process take place
})


app.get('/',(req,res)=>{
    return res.send('data')
})


app.listen(3000,(err)=>{
    if(err){
        console.log('error while running server ')
        return;
    }
    console.log('server is running');
})