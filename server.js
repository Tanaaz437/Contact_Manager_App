const dotenv=require("dotenv").config();

const express=require("express");
const connectDb=require("./config/dbConnection");
connectDb();
const app=express();
const errorHandler=require("./middlewares/errorHandler");

const port=process.env.PORT||5001;


app.use(express.json());
app.use("/api/contacts",require("./routes/contactsRoutes"));
app.use("/api/users",require("./routes/usersRoutes"));

app.use(errorHandler);


app.listen(port,()=>{
          console.log(`Server is running to port ${port}`);
          
})
