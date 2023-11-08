const mongoose = require("mongoose");

db = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connection established!!!");
    }catch(err){
        console.log("DB Error:", err)
    }
}

module.exports = db;