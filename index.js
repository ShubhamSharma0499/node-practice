const express=require('express');

const app=express();

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