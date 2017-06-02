var db = require('../models');

module.exports = function (app) {
  // creates a new burger
  app.post('/', function (req, res) {
    db.Burger.create({
      burger_name: req.body.name.trim(),
      cooked: false
    }).then(function () {
      res.redirect('/');
    });
  });

  // updates burger to cooked and assigns a customer to the order
  app.put('/:id', function (req, res) {
    db.Burger.update({
      cooked: true
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

  // clears both tables, i.e. reset button.
  // intended more for testing puruposes.
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
