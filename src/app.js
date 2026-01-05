const express = require("express");

const app = express();


// app.use("/route", [rH, rH2,rH3,rH4,rH5])

app.use("/user",[ (req,res,next)=>{
  // route Handler
  // res.send("route Handler 1"); 
  console.log("Handling the route user!");
  
  next();
  // res.send("Response!!"); 
},
(req,res,next)=>{ 
  // route handler 2
   console.log("Handling the route user 2!");
  // res.send("2nd Response!!");
  next();
},
(req,res,next)=>{ 
  // route handler 3
   console.log("Handling the route user 3!");
  // res.send("3rd Response!!");
  next();
}
,
(req,res, next)=>{ 
  // route handler 4
   console.log("Handling the route user 4!");
  // res.send("4th Response!!");
  next(); 
},
(req,res, next)=>{ 
  // route handler 4
   console.log("Handling the route user 5!");
  res.send("5th Response!!");
  // next(); 
}]);


 

app.listen(7777, ()=>{
  console.log("Server is successfully listening on port 7777... ")
});