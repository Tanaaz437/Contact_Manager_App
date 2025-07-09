const {constant}=require("../constant");
const errorHandler=(err,req,res,next)=>{
          const statusCode=req.statusCode?req.statusCode:500;
          switch(statusCode){
           case constant.Validation_Error:
                    res.json({title:"Not Found",message:err.message,stackTrace:err.stack});
                    break;
         
          case constant.UnAuthorized:
                    res.json({title:"Validation Error",message:err.message,stackTrace:err.stack});
                    break;
                    
          case constant.Forbidden:
                    res.json({title:"Forbidden",message:err.message,stackTrace:err.stack});
                    break;

          case constant.Not_found:
                    res.json({title:"Not found",message:err.message,stackTrace:err.stack});
                    break; 
          case constant.Server_Error:
                    res.json({title:"Server Error",message:err.message,stackTrace:err.stack});
                    break;           
                    
          default:
                    console.log("No Error All Good");
                    
                    break;
          }
          //stackTrace gives the whole def of error like
          //  what kind of err,in which file ,on which line
};
module.exports=errorHandler;