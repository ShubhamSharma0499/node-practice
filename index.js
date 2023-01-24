const express=require('express');

const app=express();
const bodyParser=require('body-parser') // user for parsing req
const homeRoutes=require('./routes/user'); //importing home routes
const productroute=require('./routes/products')
const sequelize=require('./config/sql');


app.use(bodyParser.urlencoded({extended:false})); // this middleware allows us to parse data from request now we can do req.body and get data passed in request body
app.use(bodyParser.json());
 
app.use('/user',homeRoutes)
app.use('/product',productroute)

sequelize.sync().then(res=>{}).catch(err=>{}) // it creates tables for models we created using sequelize

app.listen(3000,(err)=>{
    if(err){
        console.log('error while running server ') 
        return; 
    }
    console.log('server is running');
})