const express = require("express");

const dbConnect = require("./confiq/db/dbConnect");


const app = express();
//DB
dbConnect();

//Middleware
app.use(express.json());
//Register
app.post("/api/users/register", (res, req) => {
  console.log("Register")
  res.send( "User egistered" );
} );

//Login
app.post("/api/users/login", (req, res) => {
  //business logic
  res.json({ user: "User Logins" });
});

//fetch all user
app.get("/api/users", (req, res) => {
  //business logic
  res.json({ user: "fetch all user" });
});

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));
