var bodySend = require('../model');
var admin = require('../routes/admin');

function loginDetails(req, res) {
  var body = req.body;
  bodySend.loginDetails.check(body, function(response) {
    if (response.msg === "Email or password is incorrect") {
      res.json({
        emailError: '',
        passwordError: response.msg
      });
    } else if (response.msg3 != null) {
      if (response.msg3.Email === "admin@qburst.com" && response.msg3.Password === "100b618afe1a850ceafe17736d9e0648834d96b155e916657d963c7ea755d9f9") {
        var addJobCookie = "addJobCookie";
        res.cookie(addJobCookie, "jobAdd");
        var candidatesListCookie = "candidatesListCookie";
        res.cookie(candidatesListCookie, "candidatesList");
        var editJobCookie = "editJobCookie";
        res.cookie(editJobCookie, "editJob");
        res.json({
          data: response.msg3
        })
      } else {
        bodySend.loginDetails.retrieve(body, req, function(response) {
          var loginCookie = "loginCookie";
          res.cookie(loginCookie, body.email);
          var postArray = JSON.parse(response.msg1);
          var companyArray = JSON.parse(response.msg2);
          var responsibilitiesArray = JSON.parse(response.msg3);
          var bondArray = JSON.parse(response.msg4);
          var salaryArray = JSON.parse(response.msg5);
          var idArray = JSON.parse(response.msg6);
          var registerArray = JSON.parse(response.msg8);
          res.json({
            post: postArray,
            company: companyArray,
            responsibilities: responsibilitiesArray,
            bond: bondArray,
            salary: salaryArray,
            id: idArray,
            email: response.msg7,
            link: 'Logout',
            register: registerArray
          });
        });
      }
    } else {
      res.json({
        emailError: response.msg1,
        passwordError: response.msg2
      });
    }
  });
}
module.exports = loginDetails;