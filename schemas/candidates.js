var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var candidates = new Schema({
  Name: 
  {
    type: String,
    required: true
  },
  Email: 
  {
    type: String,
    required: true,
    unique: true
  },
  Password: 
  {
    type: String, 
    required: true
  },
  MobileNo: 
  {
    type: String,
    required: true	
  },
  Location: 
  {
    type: String,
    required: true
  },
  Privilage: 
  {
    type: String,
    enum: ['professional','fresher'],
    required: true
  },
  WorkExperience: 
  {
    type: Number,
    Default: 0	
  },
  Gender:
  {
    type: String,
    enum: ['male','female'],
    required:true
  },
  Resume: 
  {
    type: String,
    required: true	
  },
  Token:
  {
    type: String,
    Default: ''
  }
});
module.exports = candidates;