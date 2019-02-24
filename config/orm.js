var connection = require("./connection.js");

//sql functions
var orm = {
  selectAll: function(callBack) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  },
  insertOne: function(name, callBack) {
    connection.query("INSERT INTO burgers SET ?", {
      name: name,
      destroyed: false
    }, function(err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  },
  updateOne: function(id, callBack) {
    connection.query("UPDATE burgers SET ? WHERE ?", [{destroyed: true}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }
      callBack(result);
    });
  }
};

module.exports = orm;