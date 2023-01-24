const db=require('../config/sql');
const User = require('../models/users');


module.exports.addUser=function(req,res){
    const id=req.body.id;
    const name=req.body.name
    User.create({
        id:id,
        name:name
    }).then(result=>{
        return res.send(result);
    })
    .catch(err=>{
        return res.send(err); 
    })
}  

module.exports.delUserById=function(req,res){
    let id=req.params.id;
    db.execute('delete from users where id=?',[id]).then(result=>{
        return res.send(result)
    }).catch(err=>{
        return res.send(err)
     })
}
module.exports.getUserById=function(req,res){
    let id=req.params.id;
    db.execute('select * from users where id=?',[id]).then(result=>{
        return res.send(result)
    }).catch(err=>{
        return res.send(err)
     })
}

module.exports.updateUser=function(req,res){
    let id=req.params.id;
    db.execute('update users set name=? where id=?',[req.body.name,id]).then(result=>{
        return res.send(result)
    }).catch(err=>{
        return res.send(err)
     })
}
