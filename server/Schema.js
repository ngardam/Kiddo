const mongoose = require('mongoose')
require("dotenv").config();

const atlasUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@kiddocluster.ck1gd.mongodb.net/kiddoDB`

mongoose.connect(atlasUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on("error", console.error.bind("connection error"))

const NewsletterSchema = new mongoose.Schema({ // create Schema
    name: { type : String , required : true },
    email: { type : String , unique : true, required : true },
    phone: String
})

const Newsletter = mongoose.model("newsletter", NewsletterSchema)

const LoginSchema = new mongoose.Schema({
    name: { type : String , required : true },
    email: { type : String , unique : true, required : true },
    password: { type: String, required : true},
    phone: String,
    address: String,
    business: String,
    contact: [String],
    investment: [String],
    usertype: String
})

const Login = mongoose.model("logins", LoginSchema)

module.exports = {
    Newsletter,
    Login
}