require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/userRouter");

app.use(express.json());
app.use("/api/users", userRouter);

/* app.get("/test", (req,res)=>{
    res.json({
        success: 1, 
        message: "Rest API is working"
    });
}); */  

app.listen(process.env.APP_PORT, ()=> {
    console.log("Server is up and running on PORT=", process.env.APP_PORT);
})

