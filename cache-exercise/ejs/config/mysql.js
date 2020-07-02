// npm i--save mysql
const mysql = require('mysql')
require('dotenv').load()
class AppDAO {

	constructor() {
		var con = mysql.createConnection({
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE
		});

		con.connect(function (err) {
			if (err) throw err;
			console.log("* Mysql connected: " + process.env.DB_DATABASE)
		});
		return con;
	}
}

module.exports = AppDAO