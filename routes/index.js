const express = require('express');
const router = express.Router();

/*Middlewares for SaveData Endpoint */
const auth = require('../middleware/auth');
const ip_count = require('../middleware/ip_count');

/*Models */
const User = require('../models/User');
const Ip = require('../models/Ip');

/* GET home page. */
router.get('/', async function(req, res, next) {
  /* Show/Hide Captcha Based on Tries by that IP */
  try {
    /*Get IP from db */
    let IP = await Ip.findOne({ip_address:req.ip});
    res.render('index', { title: 'Express',captcha: IP!=null&&IP.tries>2 ,css:''});  

  } catch (error) {
    return next(error);
  }
  
});

/*Save Data Endpoint */
router.post('/saveData', auth, ip_count, function(req, res, next) {
  try {
    /*Get form data (can use joi to validate here) */
    let [name,email,pwd,Gtoken] = Object.values(req.body);
    
    /*create new User instance */
    let myuser = new User({name:name,email:email,password:pwd});

    /*Save model to database */
    myuser.save(function (err, book) {
      if (err) {
        return next(err);/*Id already registered etc */
      }
      else{
        console.log(myuser.name+' '+myuser.email+' --New Record Created Successfully');
        return next({message:'Registered Successfully!',status:200});/*For Info */
      }
    });
  } catch (error) {
    return next(error);
  }

});
module.exports = router;
