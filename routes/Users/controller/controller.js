const passport = require('passport')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
require('dotenv').config()

module.exports={
    
    auth: passport.authenticate('local-login', {
        successRedirect: `/games`,
        failureRedirect:'/',
        failureFlash: true
      }),
    register: (req,res)=>{
        User.findOne({email:req.body.email}).then((user)=>{
            if(user){
                // res.status(400).json({message:'User Exists'})
                req.flash('errors', 'Account Exists')
                return res.redirect(301, '/')
            }else{
            const newUser = new User()
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password,salt)
      
            newUser.name = req.body.name
            newUser.email = req.body.email
            newUser.username = req.body.username
            newUser.password = hash


            if(req.body.admin === process.env.ADMINSECRET){
                newUser.admin = true
            }
            console.log(process.env.ADMINSECRET)

            newUser.save().then((user)=>{
                req.login(user,(err)=>{
                    if(err){
                        res.status(500).json({confirmation: false, message:'Server error'})
                    }else{
                        res.redirect('/games',{user:user})
                    }
                })
            }).catch((err)=>console.log(err))
            }
        })
      }
}