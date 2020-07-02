// npm i--save mongoose
import mongoose from 'mongoose';

module.exports = function(){
	var dbName = process.env.DB_DATABASE;
	var dbHost = process.env.DB_HOST;
	var dbPort = process.env.DB_PORT;

	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://'+dbHost+':'+dbPort+'/' + dbName);
	mongoose.connection
			.once('open', ()  => console.log("* Mongo connected: " + dbName))
			.on('error' , err => console.error("* Can't connect mongodb"));
}
