const Sequelize=require('sequelize');
const sequelize=require('../config/sql')

const Product=sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Product;