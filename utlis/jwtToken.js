const jwt=require('jsonwebtoken'); //this will generate jwt token

const generateJwtToken=(id)=>{
      return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1h'})

}
module.exports=generateJwtToken