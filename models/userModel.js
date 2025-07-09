const moongoose=require("mongoose");
//this will help in interacting with mongodb

const userSchema=moongoose.Schema({
          //what field we required to the user to be registered
          
          username:{
                    type:String,
                    required:[true,"Please add a username"],
          },
          email:{
                    type:String,
                    required:[true,"Please add the  user email"],
                    unique:[true,"Email address already in use"]
          },
          password:{
                    type:String,
                    required:[true,"Please add the user password"]
          }

},{
          timestamps:true
});
module.exports=moongoose.model("User",userSchema)