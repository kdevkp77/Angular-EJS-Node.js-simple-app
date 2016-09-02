var bodySend = require('../model');

function createApplication(req, res) { 
  var body = req.body;
  var id = req.params.id;
  var email = req.cookies.loginCookie;
  if (body.register == 1) {
    bodySend.createApplication.insert(body, req, id, function(response) {
      if (response.msg === "success") {
        res.json({
          post: response.msg1,
          company: response.msg2,
          responsibilities: response.msg3,
          bond: response.msg4,
          salary: response.msg5,
          email: email,
          datas: response.msg6,
          id: id,
          link: 'Logout',
          congratsMsg: "CONGRATULATION !!!!",
          failureMsg: 'Successfully Registered'
        });
      }
      if (response.msg === "failed") {
        res.json({
          post: response.msg1,
          company: response.msg2,
          responsibilities: response.msg3,
          bond: response.msg4,
          salary: response.msg5,
          email: email,
          id: id,
          link: 'Login',
          congratsMsg: '',
          failureMsg: "You Need To Sign Up For Registration"
        });
      }
      if (response.msg === "reregister") {
        res.json({
          post: response.msg1,
          company: response.msg2,
          responsibilities: response.msg3,
          bond: response.msg4,
          salary: response.msg5,
          email: email,
          id: id,
          link: 'Logout',
          congratsMsg: '',
          failureMsg: "You Already Registered"
        })
      }
    });
  }
  if (body.register == 0) {
    bodySend.createApplication.remove(body, req, id, function(response) {
      if (response.msg1 === "executed") {
        res.json({
          post: response.msg3,
          company: response.msg4,
          responsibilities: response.msg5,
          bond: response.msg6,
          salary: response.msg7,
          email: body.email,
          id: id,
          link: response.msg2,
          datas: response.msg8,
          congratsMsg: "Unregistered",
          failureMsg: ''
        });
      }
      if (response.msg1 === "failed") {
        res.json({
          post: response.msg3,
          company: response.msg4,
          responsibilities: response.msg5,
          bond: response.msg6,
          salary: response.msg7,
          email: body.email,
          id: id,
          link: response.msg2,
          congratsMsg: '',
          failureMsg: "You didn't registered before!!!"
        })
      }
    });
  }
}
module.exports = createApplication;