const Sequelize=require('sequelize');

const sequelize=new Sequelize('new_node','root','12345678',{dialect:'mysql',host:'localhost'})

module.exports=sequelize;