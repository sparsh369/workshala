const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email :{
        type : String, 
        required : true ,
    } ,
    otp : {
        type : String ,
        required : true 
    },
});

module.exports = mongoose.model("otp", otpSchema);