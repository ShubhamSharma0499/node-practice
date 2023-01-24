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
    User.findByPk(id).then(result=>{
        return result.destroy()
    }).then(()=>{
        return res.send('user deleted')
    }).catch(err=>{
        return res.send(err)
     })
}
module.exports.getUserById=function(req,res){
    let id=req.params.id;
    User.findByPk(id).then(result=>{
        return res.send(result)
    }).catch(err=>{
        return res.send(err)
     })
}

module.exports.updateUser=function(req,res){
    let id=req.params.id;
    User.findByPk(id).then(result=>{
        result.name=req.body.name
        return result.save()
    }).then(response=>{
        return res.send('user Updated')
    }).catch(err=>{
        return res.send(err);
    })
}

module.exports.getAll=function(req,res){
    User.findAll().then(result=>{
        return res.send(result)
    }).catch(err=>{
        return res.send(err)
    })
}
