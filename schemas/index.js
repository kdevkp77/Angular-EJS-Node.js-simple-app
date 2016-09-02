var application = require('./application');
var  candidates = require('./candidates');
var jobDetails = require('./jobDetails');
var advertisement = require('./advertisement');
var schema = {
	application : application,
	candidates : candidates,
	jobDetails : jobDetails,
  advertisement : advertisement
};
module.exports = schema;