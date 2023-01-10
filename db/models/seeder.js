const dotenv=require("dotenv");
const mongoose=require('mongoose');
const user=require('../../user');
const product=require('../../products');
const User=require('../models/usermodel');
const Product=require('../models/productmodel');
const Order=require('../models/ordermodel');
const dbconnect=require('../dbconnect');

dotenv.config()
dbconnect
const importData=async ()=>{
      try {
            await User.User.deleteMany();
            await Product.Product.deleteMany();
            await Order.Order.deleteMany();
            
          const createUser=  await User.User.insertMany(user.default);
          const adminUser=createUser[0]._id;
          const sampleProduct=product.products.map(productItem=>{
            return {...productItem,User:adminUser}
          })
          await Product.Product.insertMany(sampleProduct);
          console.log('Data Imported')
          process.exit(1)
      } catch (error) {
            console.log(error);
            process.exit(1)
            
      }
}


const destroyData=async ()=>{
      try {
            await User.User.deleteMany();
            await Product.Product.deleteMany();
            await Order.Order.deleteMany();
            
                console.log('Data destroyed ')

            process.exit(1);
      } catch (error) {
            console.log(error);
            
      }
}
if(process.argv[2]==='-d')
{
      destroyData();
}

      else importData()