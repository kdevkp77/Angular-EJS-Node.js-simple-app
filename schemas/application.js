var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var application = new Schema({
  Email: 
  {
    type: String,
    required: true
  },
  CompanyId: 
  {
    type: String
  }   
});
application.index({Email: 1,CompanyId: 1},{unique: true});
module.exports = application; 