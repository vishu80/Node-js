const fs = require("fs");
const productList = require("../products");
const Product=require('../db/models/productmodel');



exports.getProductsList = (req, res) => {
  Product.Product.find((err,docu)=>{
    if(err)
    {
      res.status(500).json({
          title:'Internal Server error'
      })
    }
    if(docu.length!=0)
      {
        res.status(200).json({
        status: "ok",
        productList:docu,
      });
      }
    else 
    res.status(200).json({
      title:'Data is empty'
  })
    });
  

};

exports.getProductsDetail = (req, res) => {
  
  
    Product.Product.findById(req.params.id,function(err,docs){
        if(err)
        {
          res.status(400).json({
            message:'Internal Server error'
          })
        }
        else
        {
          res.status(200).json({
            productDetail:docs
          })
        }
    })
  
};
