const express=require("express");
const router=express.Router();
const {registeredUser,loginUser,currentUser}=require("./../controllers/userController");
 
const validateToken=require("./../middlewares/ValidateTokenHandler");

router.post('/registerd',registeredUser);

router.post("/login",loginUser);

router.get("/current",validateToken,currentUser);

module.exports=router;