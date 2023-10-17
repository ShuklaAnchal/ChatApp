var express = require('express');
const passport = require('passport');
var router = express.Router();
const localStrategy = require('passport-local')
var userModle = require('./users');
var path = require('path')
const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

passport.use(new localStrategy(userModle.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});


router.get('/profile',isloggedIn, async function(req, res, next) {
  var currentUser = await userModle.findOne({
    username: req.user.username
  })
  res.render('profile',{ user: currentUser});
});

router.get('/login', function(req, res, next) {
  res.render('login');
});


router.post("/register",function(req, res, next){
  var newUser ={
    username: req.body.username,
    pick:req.body.pick,
  };
  userModle.register(newUser, req.body.password)
  .then(function(registred){
    passport.authenticate('local')(req, res, function(){
      res.redirect("/profile")
    })
  })
 
});

router.post('/login', passport.authenticate('local', 
{
  successRedirect:"/profile",
  failureRedirect:"/login"
}),
  (req, res, next) => { }
  )

router.get('/logout',isloggedIn, function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


function isloggedIn(req, res, next) {
  if (req.isAuthenticated('/profile')) return next();
  else res.redirect('/');
}

//search user

router.post('/searchUser', function (req, res, next) {
  console.log(req.body)
  var result = req.body.result
  userModle.find({
    username: { $regex: result }
  }).then(function (users) {
      res.json({ users });
    }).catch(err=>{
      console.log(err)
    })
})


module.exports = router;
