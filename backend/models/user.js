const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username:{
        type:String,
        unique,
        required:[true,"Please Enter your username"]
    },
    firstName:{
        type:String,
        required:[true,"Please Enter your First Name"]
    },
    lastName:{
        type:String,
        required:[true,"Please Enter your Last Name"]
    },

    email:{
        type:String,
        unique,
        required:[true,"Please Enter your Email"]
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("User",userSchema);