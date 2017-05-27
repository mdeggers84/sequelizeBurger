var express = require('express');
var router = express.Router();

var burger = require('../models/burgers.js');

require('../models/burgers');

// sets up routes for get, post, put, and delete
// passes to burgers.js

// all reroutes redirected to this for page load after db actions completed
router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    // logs the db object and then sends info the index.handlebars for page view
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/', function (req, res) {
  var name = req.body.name.trim();
  // prevents empty values from posting to db
  if (name !== '') {
    // sending callback function allows code to be run in this file
    // after query is finsihed in orm.js
    burger.insertOne(name, function () {
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

router.put('/:id', function (req, res) {
  burger.updateOne(parseInt(req.params.id, 10), function () {
    res.redirect('/');
  });
});

router.delete('/', function (req, res) {
  burger.clearDB(function () {
    burger.setID(function () {
      res.redirect('/');
    });
  });
});

module.exports = router;
