var db = require('../models');

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.render('index', hbsObject);
    });
  });
};
