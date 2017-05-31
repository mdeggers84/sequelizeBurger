var db = require('../models');

module.exports = function (app) {
  // gets all burgers with associated customer
  // ordered by burger_name
  app.get('/', function (req, res) {
    db.Burger.findAll({
      order: 'burger_name',
      include: [{
        model: db.Customer
      }]
    }).then(function (dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.render('index', hbsObject);
    });
  });
  // setup api route for easier query testing
  app.get('/api', function (req, res) {
    db.Burger.findAll({
      order: 'burger_name DESC',
      include: [{
        model: db.Customer
      }]
    }).then(function (dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.json(hbsObject);
    });
  });
  // setup api/customers for testing
  app.get('/api/customers', function (req, res) {
    db.Customer.findAll({}).then(function (dbCustomer) {
      res.json(dbCustomer);
    });
  });
};
