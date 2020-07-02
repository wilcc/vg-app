const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    name:{type:String,lowercase:true,required:true},
    username:{type:String,lowercase:true,required:true,unique:true},
    email:{type:String, lowercase:true,required:true,unique:true},
    password:{type:String,required:true},
    timestamp:{type:String,default:()=>{
        moment().format('dddd, MMMM Do YYYY, h:mm a')
    }},
    admin:{type:Boolean,default: false},
    favorite:[{type:Schema.Types.ObjectId, ref:'Game'}]
})


module.exports = mongoose.model('user', UserSchema)