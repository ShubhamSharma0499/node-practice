const db=require('../config/sql');
const Product = require('../models/products');


module.exports.addProduct=function(req,res){
    const id=req.body.id;
    const name=req.body.name
    Product.create({
        id:id,
        name:name
    }).then(result=>{
        return res.send(result);
    })
    .catch(err=>{
        return res.send(err); 
    })
}  

module.exports.delProductById=function(req,res){
    let id=req.params.id;
    Product.findByPk(id).then(result=>{
        return result.destroy()
    }).then(()=>{
        return res.send('Product deleted')
    }).catch(err=>{
        return res.send(err)
     })
}
module.exports.getProductById=function(req,res){
    let id=req.params.id;
    Product.findByPk(id).then(result=>{
        return res.send(result)
    }).catch(err=>{
        return res.send(err)
     })
}

module.exports.updateProduct=function(req,res){
    let id=req.params.id;
    Product.findByPk(id).then(result=>{
        result.name=req.body.name
        return result.save()
    }).then(response=>{
        return res.send('Product Updated')
    }).catch(err=>{
        return res.send(err);
    })
}

module.exports.getAll=function(req,res){
    Product.findAll().then(result=>{
        return res.send(result)
    }).catch(err=>{
        return res.send(err)
    })
}
