 // Import (require) `connection.js` into `orm.js`

 // Inside the `orm.js` file create the methods that will
 //  execute MySQL commands necessary in the controllers.
 //   `selectAll()`, `insertOne()`, `updateOne()` are the methods
 //    you will need to use inside the app and in order to retrieve
 //     and store data in your database.

var connection = require('./connection.js');

// object relational mapper (ORM)

var orm = {
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
        connection.query(queryString, [valOfCol], function(err, result) {
            console.log(result);
        });
    },
    selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
        var queryString = 'SELECT ' + whatToSelect + ' FROM ' + table + ' ORDER BY '+ orderCol + ' ' + orderBy;
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },
    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString = 'SELECT ' + tableOneCol + ', COUNT(' + tableOneCol + ') AS count FROM ' + tableOne + ' LEFT JOIN ' + tableTwo + ' ON ' + tableTwo + '.' + tableTwoForeignKey + '= ' + tableOne + '.id GROUP BY ' + tableOneCol + ' ORDER BY count desc LIMIT 1';
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;

   // Export the orm object in `module.exports`