require('dotenv').config();

const mongoose = require('mongoose');

const setupMongooseConnections = function() {
  mongoose.Promise = global.Promise;

  mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true });

  mongoose.connection.on('connected', function() {
    console.info('Mongoose is now connected');
  });

  mongoose.connection.on('error', function(err) {
    console.error('Error in Mongoose connection: ', err);
  });

  mongoose.connection.on('disconnected', function() {
    console.info('Mongoose is now disconnected..!');
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.info('Mongoose disconnected on process termination');
      process.exit(0);
    });
  });
}

module.exports = setupMongooseConnections;