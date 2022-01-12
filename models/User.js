const mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")
const Schema = mongoose.Schema



const userschema = new Schema({
    fullName : String,
    email : String,
    phone:String ,


})
module.exports = mongoose.model("User",userschema)