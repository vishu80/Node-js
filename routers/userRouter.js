const userRoute=require('../controllers/userController');
const express=require('express');
const router=express();
const getUserProfile=require('../controllers/userController');
const updateUserProfile=require
const checkAuthentication=require('../middleWare/authentication')
router.post('/api/users/login',userRoute.authUser);
router.put('/api/update/profile/:id',userRoute.updateUserProfile)
router.route('/profile/:id').get(getUserProfile.getUserProfile);
router.route('/api/register').post(getUserProfile.registerUser)
// router.route('/api/update/profile').put(getUserProfile.updateUserProfile)

module.exports=router