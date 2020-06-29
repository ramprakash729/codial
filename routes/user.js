const express=require('express');
const userControl=require('../controllers/user_controller');

const router=express.Router();
console.log("router 2 is loaded");

router.get('/userc',userControl.userc);
module.exports=router;

