var connection = require("../config/connection.js");

function printQuestionMarks(num){
    var arr = [];
  
    for (var i=0; i<num; i++){
      arr.push('?')
    }
  
    return arr.toString();
  }
  
  function objToSql(ob){
    
    var arr = [];
  
    for (var key in ob) {
      arr.push(key + '=' + ob[key]);
    }
  
    return arr.toString();
  }
  
  var orm = {
      selectAll: function(tableInput, callback) {
          var queryString = 'SELECT * FROM ' + tableInput + ';';
          connection.query(queryString, function(err, result) {
              if (err) throw err;
              callback(result);
          });
      },
      
      insertOne: function(table, cols, vals, callback) {
        var queryString = 'INSERT INTO ' + table;
  
        queryString = queryString + ' (';
        queryString = queryString + cols.toString();
        queryString = queryString + ') ';
        queryString = queryString + 'VALUES (';
        queryString = queryString + printQuestionMarks(vals.length);
        queryString = queryString + ') ';
  
        connection.query(queryString, vals, function(err, result) {
          if (err) throw err;
          callbackb(result);
        });
      },
      
      updateOne: function(table, objColVals, condition, callback) {
        var queryString = 'UPDATE ' + table;
  
        queryString = queryString + ' SET ';
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + ' WHERE ';
        queryString = queryString + condition;
  
        console.log(queryString)
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          callback(result);
        });
      }
  };
  
  module.exports = orm;