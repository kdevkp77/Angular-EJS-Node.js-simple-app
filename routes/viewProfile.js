var express = require('express');
var router = express.Router();
var controller = require('../controller');
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
  controller.viewProfile.viewProfile(req, res);
});
router.post('/', uploadtype, function(req, res) {
  controller.updateProfile(req, res);
});
module.exports = router;