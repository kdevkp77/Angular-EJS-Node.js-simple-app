var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var JobDetails = new Schema({
  CompanyId:
  {
    type: String,
    unique: true,
    required: true
  },
  CompanyName: 
  {
    type: String,
    required: true,
    lowercase: true
  },
  Post: 
  {
    type: String,
    required: true,
    lowercase: true
  },
  QualitiesRequired: 
  {
    type: String,
    default: 0
  },
  SalaryPackage: 
  {
    type: String,
    required: true
  },
  Bond: 
  {
    type: String,
    required: true
  },
  Place: 
  {
    type: String,
    required: true
  }
});
module.exports = JobDetails;