

const asyncHandler = require("express-async-handler");
const userModel=require("./../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


//desc registerd user
//@route post /api/users/registered
//@access public
const registeredUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    //if for if user already avaibale
    const userAvailable=await userModel.findOne({email});
    if(userAvailable){
               res.status(400);
        throw new Error("registered user alreday exist with this email id");
    }

        const hashPassword=await bcrypt.hash(password,10);
        console.log(hashPassword);
        const user=await userModel.create({
            username,
            email,
            password:hashPassword
        })
       /*  res.json(`User Created ${user}`) */ //created
        if(user){ //if user creted then only send the name and email
            res.status(201).json({_id:user.id,email:user.email})
        }else{
            res.status(400);
            throw new Error("User data is not valid");
        }
  /*   res.json({message:"Successfully registered the user"}); */
});

//desc login user
//@route post /api/users/login
//@access public
const loginUser=asyncHandler(async(req,res)=>{
//here when the user tried to login then email and password will sent to req body
    const{email,password}=req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("Validation Failed");
    }

    const user=await userModel.findOne({email})
    
    //compare the passwrod with hashpassword
    if(user &&(await  bcrypt.compare(password,user.password))){
                const accessToken=jwt.sign({
                        user:{  //this is the payload 
                            username:user.username,
                            email:user.email,
                            id:user.id
                        },
                },process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:"1h"}
            );
                res.status(200).json({accessToken});
    }else{
            //if password doesnt match 
            res.status(401);
            throw new Error("email or password is not valid");       
    }

})

//desc current user
//@route post /api/users/current
//@access private
const currentUser=asyncHandler(async(req,res)=>{
          res.json(req.user);

})

module.exports={registeredUser,loginUser,currentUser}