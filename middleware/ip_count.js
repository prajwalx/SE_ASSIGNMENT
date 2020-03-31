const Ip = require('../models/Ip');
/*
Update Ip Count and save in MongoDB
*/
module.exports =  (req, res, next) => {
    try {
        //Updating Ip Address Count
        Ip.findOneAndUpdate({
            ip_address: req.ip
        },{ 
            $inc: { tries: 1 },
            createdAt: new Date()
        },{ 
            upsert: true, 
            new: true, 
            setDefaultsOnInsert: true 
        },(err,res)=>{
            if(err) 
                return next(err);
            else    
                return next();
        }
        )
        
    } catch (error) {
        return next(error);
    }
};