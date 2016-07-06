 // Import (require) `connection.js` into `orm.js`

 // Inside the `orm.js` file create the methods that will
 //  execute MySQL commands necessary in the controllers.
 //   `selectAll()`, `insertOne()`, `updateOne()` are the methods
 //    you will need to use inside the app and in order to retrieve
 //     and store data in your database.

var connection = require('./connection.js');

// object relational mapper (ORM)

// Yeah I know this is the meat and potatoes of the app. Not sure how to approach this trying to reconfigure old code.
// need to figure out how to assign each burger a number 
var orm = {
    selectALL: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
        connection.query(queryString, [valOfCol], function(err, result) {
            console.log(result);
        });
    },
    insertOne: function(whatToInsert, table, orderCol) {
        var queryString = 'SELECT ' + whatToInsert + ' FROM ' + table + ' ORDER BY '+ orderCol;
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },

    updateOne: function(whatToUpdate, table, orderCol, orderBy) {
        var queryString = 'SELECT ' + whatToUpdate + ' FROM ' + table + ' ORDER BY '+ orderCol;
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },
  
};

module.exports = orm;

   // Export the orm object in `module.exports`