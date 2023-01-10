const getValue=require('../controllers/basicontroller') //router file where the different url will be set
const express=require('express');
const router=express();
router.get('/',getValue.getValue);
router.get('/Vishal',getValue.vishalValue)
module.exports=router;