const express=require('express');
const homeControl=require('../controllers/home_controller');

const router=express.Router();
console.log("router is loaded");
module.exports=router;
router.get('/',homeControl.home);
router.use('/user',require('./user'));