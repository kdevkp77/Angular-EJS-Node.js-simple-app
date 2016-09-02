var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var advertisement = new Schema({
  ProductName: 
  {
    type: String,
    required: true
  },
  Link: 
  {
    type: String,
    required: true
  },
  Image:
  {
    type: String,
    required: true
  }  
});
module.exports = advertisement; 