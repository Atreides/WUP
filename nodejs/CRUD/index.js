const createData = require('./createData');
const readData = require('./readData');
//const updateData = require('./updateData');
//const deleteData = require('./deleteData');

module.exports = function(app, db){
    createData(app, db);
    readData(app, db);
    //updateData(app, db);
    //deleteData(app, db);
}