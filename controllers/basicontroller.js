exports.getValue=(req,res)=>{
      res.status(200).json({
            message:'Hi this is vishal'
      })
} //this file will contain the response of code
exports.vishalValue=(req,res)=>{
      res.status(200).json({meessage:'getting the value from url'})
}