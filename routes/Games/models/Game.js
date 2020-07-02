const mongoose = require('mongoose')
const moment = require('moment')

const GameSchema = new mongoose.Schema({
    title:{type:String,required:true,},
    description:{type:String,required:true},
    yearReleased:{type:Number,required:true},
    playtime:{type:Number},
    image:{type:String},
    timestamp:{type:String, default:()=>{
        moment().format('dddd, MMMM Do YYYY, h:mm a')
    }}
})

module.exports = mongoose.model('Game', GameSchema)