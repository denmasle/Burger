var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(callBack) {
    orm.selectAll(function(res) {
      callBack(res);
    });
  },
  insertOne: function(name, callBack) {
    orm.insertOne(name, function(res) {
      callBack(res);
    });
  },
  updateOne: function(id, callBack) {
    orm.updateOne(id, function(res) {
      callBack(res);
    });
  }
};

module.exports = burgers;