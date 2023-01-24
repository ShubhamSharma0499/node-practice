const Sequelize=require('sequelize');
const sequelize=require('../config/sql')

const CartItem=sequelize.define('cartitem',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    quantity:{
        type:Sequelize.INTEGER
    }
})

module.exports=CartItem;