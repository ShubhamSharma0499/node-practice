const express=require('express');

const app=express();
const bodyParser=require('body-parser') // user for parsing req


app.use(bodyParser.urlencoded({extended:false})); // this middleware allows us to parse data from request now we can do req.body and get data passed in request body

// add middleware
app.use((req,res,next)=>{ // this function will be called for every request 
    console.log('middleware called');
    next(); //this is used to pass control to next middleware else there will no furthur process take place
})
// note either you call next() or you should return a response in middleware to pass control 

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