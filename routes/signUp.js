var express = require('express');
var app = express();
var router = express.Router();
var usersDetails = require('../controller');
var multer = require('multer');
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
       cb(null, 'public/uploads/')
   },
   filename: function (req, file, cb) {
       cb(null, file.originalname+ '-' + Date.now()+'.doc')
   }
});
var upload = multer({ storage: storage });
var uploadtype = upload.single('file');
router.get('/', function(req, res) {
  res.render('signUp', {
    nameError: '',
    emailError: '',
    passwordError: '',
    phNoError: '',
    locationError: '',
    privilageError: '',
    genderError: '',
    resumeError: '',
    confirmError: ''
  });
});
router.post('/', uploadtype, usersDetails.usersDetails);
module.exports = router;