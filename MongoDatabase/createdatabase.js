const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const mongoDbconnection = async () => {
    return new Promise((resolve, reject) => {
        const url = "mongodb://localhost:27017/MongoDatabase";
        mongoose.connect(url, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false}, (error, result) => {
            if (error) {
                console.log(error);
                return reject(error);
            }
            return resolve('Db successfully connected!');
        });
    });
};

autoIncrement.initialize(mongoose);

module.exports = {
    mongoDbconnection: mongoDbconnection
};



// var MongoClient = require('mongodb').MongoClient;  
// var url = "mongodb://localhost:27017/MongoDatabase";  
// MongoClient.connect(url, function(err, db) {  
// if (err) throw err;  
// console.log("Database created!");  
// db.close();  
// });  
