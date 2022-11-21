var express = require('express');
var router = express.Router();

//import controller
const ctrlPenelitian = require("../controllers/penelitian");
const ctrlPengabdian = require("../controllers/pengabdian");

//routes penelitian
router.route('/penelitian')
    .get(ctrlPenelitian.penelitianShow)
    .post(ctrlPenelitian.penelitianCreate);

router.route('/penelitian/:id')
    .get(ctrlPenelitian.penelitianReadOne)
    .put(ctrlPenelitian.penelitianUpdateOne)
    .delete(ctrlPenelitian.penelitianDeleteOne);

// routes pengabdian
router.route('/pengabdian')
    .get(ctrlPengabdian.pengabdianShow)
    .post(ctrlPengabdian.pengabdianCreate);

router.route('/pengabdian/:id')
    .get(ctrlPengabdian.pengabdianReadOne)
    .put(ctrlPengabdian.pengabdianUpdateOne)
    .delete(ctrlPengabdian.pengabdianDeleteOne);
module.exports = router;