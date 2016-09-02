var bodySend = require('../model');

function search(req, res) {
  var body = req.body;
  bodySend.search.retrieve(body, req, function(response) {
    if (req.body.post === '') {
      var Post = "";
    } else {
      var Post = req.body.post.toLowerCase();
    }
    if (req.body.company === '') {
      var Company = "";
    } else {
      var Company = req.body.company.toLowerCase();
    }
    if (Post === '' && Company != '') {
      if (response.msg === "not found") {
        res.json({
          successMsg: response.msg
        });
      } else {
        var postArray = JSON.parse(response.msg1);
        var companyArray = JSON.parse(response.msg2);
        var responsibilitiesArray = JSON.parse(response.msg3);
        var bondArray = JSON.parse(response.msg4);
        var salaryArray = JSON.parse(response.msg5);
        var idArray = JSON.parse(response.msg6);
        res.json({
          post: postArray,
          company: companyArray,
          id: idArray,
          email: response.msg7,
          link: 'Login'
        });
      }
    }
    if (Company === '' && Post != '') {
      if (response.msg === "not found") {
        res.json({
          successMsg: response.msg
        });
      } else {
        var postArray = JSON.parse(response.msg1);
        var companyArray = JSON.parse(response.msg2);
        var responsibilitiesArray = JSON.parse(response.msg3);
        var bondArray = JSON.parse(response.msg4);
        var salaryArray = JSON.parse(response.msg5);
        var idArray = JSON.parse(response.msg6);
        res.json({
          post: postArray,
          company: companyArray,
          id: idArray,
          email: response.msg7,
          link: 'Login'
        });
      }
    }
    if (Company != '' && Post != '') {
      res.json({
        post: response.msg1,
        company: response.msg2,
        id: response.msg6,
        email: response.msg7,
        link: 'Login',
        msg: response.msg
      })
    }
    if (Company === '' && Post === '') {
      res.json({
        successMsg: response.msg
      });
    }
  });
}
module.exports = search;