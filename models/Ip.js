const mongoose = require('mongoose');

const IpSchema = new mongoose.Schema({
    ip_address : {type:String,required:true,index: { unique: true } },
    tries: {type:Number, required:true},
    createdAt: { type: Date, expires: '1440m', default: Date.now }
  });
/*
Autodeletion of record 24 hours from createdAt.
createdAt updated during each trie
 */
  module.exports = mongoose.model('Ip',IpSchema);