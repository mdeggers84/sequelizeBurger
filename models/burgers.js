// calls the orm object with burger db specific information
var orm = require('../config/orm.js');

var burger = {
  // passes table and cb function
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    });
  },
  // passes tbl, col name, and cb
  insertOne: function (name, cb) {
    orm.insertOne('burgers', 'burger_name', name, function (res) {
      cb(res);
    });
  },
  // passes tbl, col name, boolean value, id, and cb
  updateOne: function (id, cb) {
    orm.updateOne('burgers', 'devoured', true, id, function (res) {
      cb(res);
    });
  },
  // following two functions reset auto_increment when db is cleared
  // only needs to pass cb
  clearDB: function (cb) {
    orm.clearDB(function (res) {
      cb(res);
    });
  },
  // only needs to pass cb
  setID: function (cb) {
    orm.setID(function (res) {
      cb(res);
    });
  }
};

module.exports = burger;
