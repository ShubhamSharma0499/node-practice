const express=require('express');

const app=express();
const bodyParser=require('body-parser') // user for parsing req
const homeRoutes=require('./routes/home'); //importing home routes

app.use(bodyParser.urlencoded({extended:false})); // this middleware allows us to parse data from request now we can do req.body and get data passed in request body
 
app.use(homeRoutes)









app.listen(3000,(err)=>{
    if(err){
        console.log('error while running server ')
        return;
    }
    console.log('server is running');
})