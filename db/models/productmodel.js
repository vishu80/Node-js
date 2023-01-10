const mongoose=require('mongoose');

const reviewsSchema=[{
      name:{
            type:String,
            required:true,

      },
      rating:{
            type:Number,
            required:true,
            
      },
      comment:{
            type:String,
            required:true,
            
      },
     
},{
      timeStamps:true
}]
const productSchema=mongoose.Schema({
      user:{
            type:mongoose.Schema.Types.ObjectId,
            // required:true,
            ref:'User'

      },
      name:{
            type:String,
            required:true,
            
      },
      image: {
            type: String,
            required: true,
          },
      brand:{
            type:String,
            required:true,
            
      },
      model:{
            type:String,
            // required:true,
            
      },
      category:{
            type:String,
            required:true,
            
      },
      description:{
            type:String,
            required:true,
            
      },
      numReviews:{
            type:Number,
            required:true,
            default:0
            
      },
      price:{
            type:Number,
            required:true,
            default:0
            
      },
      countInStock:{
            type:Number,
            required:true,
            default:0
            
      },
      reviews:[reviewsSchema]
},{timeStamps:true});

const Product=mongoose.model('products',productSchema);
exports.Product=Product