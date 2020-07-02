const express = require('express');
const router = express.Router();
const Game = require('./models/Game')
const User = require('../Users/models/User')
/* GET users listing. */
router.get('/', function(req, res, next) {
  Game.find().then((games)=>{
    if(games.length){
        return res.render('landing',{games})
        // return res.status(200).json({stocks})  
    }
    return res.send('No Game Found')
}).catch((err)=> {return next(err)})
});


router.get('/singlegame/:title', (req,res)=>{
  Game.findOne({title:req.params.title}).then((games)=>{
    res.render('singlegame',{games})
  })
})
router.get('/addtofavorite/:id', (req,res) => {
  User.findById(req.user._id).then((foundUser) => {

      foundUser.favorite.push(req.params.id)
      foundUser.save()
      req.flash('success', `added to favorites`);
      return res.redirect('/games')
  })
  
}),
router.get('/removefavorite/:id',(req,res)=>{
  User.findById(req.user._id).then((foundUser)=>{
    foundUser.favorite.filter((game)=>{
      return game._id !== req.params.id
    })
    foundUser.save()
      req.flash('success', `removed to favorites`);
      return res.redirect('/games')
  })
})
router.get('/delete/:id',(req,res)=>{
  Game.findByIdAndDelete(req.params.id).then(res.redirect('/games')).catch((err)=>{
    res.status(400).json({message:err})
  })
})
router.get('/favoritegame',(req,res)=>{
  User.findById(req.user._id).populate('favorite').exec((err,game)=>{
    if(err){
      res.json(err)
    }res.render('favorite',{favorite:game.favorite})
  })
})
router.post('/addgame',(req,res)=>{
  Game.findOne({title:req.body.title}).then((game)=>{
    if(game){
      return res.send('Game Already Exists')
    }
    let newGame = new Game()
    newGame.title = req.body.title
    newGame.description = req.body.description
    newGame.yearReleased = req.body.yearReleased
    newGame.playtime = req.body.playtime
    newGame.image = req.body.image

    newGame.save().then((game)=>{
      return res.redirect(`/games/singlegame/${game.title}`)
    }).catch((err)=>{
       res.status(400).json({message:'error', err})
    })
  })
})

router.get('/addgame',(req,res)=>{
  res.render('add')
})
module.exports = router;
