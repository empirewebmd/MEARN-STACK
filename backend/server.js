const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");

const app = express();
// //DB
dbConnect();

//Middleware
app.use(express.json());

// //Users route
// app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);

// // make suure to call your error
// //  handler at the end of all your routes
// //err handler
app.use(notFound);
app.use(errorHandler);
//server
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server is running on  ${PORT}`));

// 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
