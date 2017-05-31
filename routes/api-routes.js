var db = require('../models');

module.exports = function (app) {
  app.post('/', function (req, res) {
    db.Burger.create({
      burger_name: req.body.name.trim(),
      devoured: false
    }).then(function () {
      res.redirect('/');
    });
  });

  app.put('/:id', function (req, res) {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function () {
      db.Customer.create({
        customer_name: req.body.name
      }).then(function (customer) {
        customer.setBurger(req.params.id);
      }).then(function () {
        res.redirect('/');
      });
    });
  });

  app.delete('/', function (req, res) {
    db.Burger.destroy({
      where: {
        id: {
          $gte: 1
        }
      }
    }).then(function () {
      db.Customer.destroy({
        where: {
          id: {
            $gte: 1
          }
        }
      }).then(function () {
        res.redirect('/');
      });
    });
  });
};
