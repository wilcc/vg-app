const express = require('express');
const router = express.Router();

const {check,validationResult} = require('express-validator')
const controller = require('./controller/controller')


router.use((req,res,next)=>{
  res.locals.user = req.user
  res.locals.errors =req.flash('errors')
  res.locals.success = req.flash('success')
  next()
})

const loginCheck = [
  check('email').isEmail(),
  check('password').isLength({min:3})
]

const loginValidate = (req,res,next)=>{
  const info = validationResult(req)
  if(!info.isEmpty()){
      req.flash('errors', 'Invalid Email or Password')
      return res.redirect('/')
  }
  next()
}
router.get('/',(req,res)=> { 
  res.render('index')
})

router.get('/register',(req,res)=>{
  res.render('index')
})
router.post('/login',controller.auth)
router.post('/register', controller.register)
router.get('/thankyou',(req,res)=>{
  res.render('thankyou')
})
router.get('/logout',(req,res)=>{
  req.logout()
  res.redirect('/')
})
module.exports = router;
