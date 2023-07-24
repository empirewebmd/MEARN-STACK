



const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bubmellz1born:0CxyCTsPanhq6t31@blogcluster.wnff4eo.mongodb.net",
      {
       
        
      }
    );
    console.log("Db is Connected Successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;





