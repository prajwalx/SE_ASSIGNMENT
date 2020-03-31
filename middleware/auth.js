const axios = require('axios');
const querystring = require('querystring');
const Ip = require('../models/Ip');
/*
Authenticate Captcha if Tries >=3 Middleware
*/
module.exports = async (req, res, next) => {
  try {
    // https://www.google.com/recaptcha/api/siteverify
    // secret	Required. The shared key between your site and reCAPTCHA.
    // response	Required. The user response token provided by the reCAPTCHA client-side integration on your site.
    
    /*If tries<2 pass to next handler  */
    let IP = await Ip.findOne({ip_address:req.ip});
    console.log(IP);
    if(IP==null||IP.tries<=2){
        return next();
    }
    /*Get Captcha Token */
    let [name,email,pwd,Gtoken] = Object.values(req.body);
    /*Authenticate Captcha Token */
    let {data} = await axios.post('https://www.google.com/recaptcha/api/siteverify', querystring.stringify(
        {
        secret:'6LfOguUUAAAAALqPTixk-mlzDsl4PbtAP1HDOGb2',
        response: Gtoken
        })
    );
    /*Auth Success */
    if(data.success) {
        return next();
    }
    else{
        /*Auth Fail. Stop middleware chain. Apply err css on captcha div  */
        res.render('index', { title: 'Express',captcha: true ,css:'err'});
    }
  } catch(err) {
      return next(err);
  }
};