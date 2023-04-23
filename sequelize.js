"use strict";

const path = require("path");
const { DataTypes, Sequelize } = require("sequelize");

const {MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST} = process.env; 
const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
	dialect:"mysql", 
	host: MYSQL_HOST, 
	logging: process.env.NODE_ENV !== "production" && console.log
})

// const sequelize = new Sequelize({
// 	dialect: "sqlite",
// 	logging: process.env.NODE_ENV !== "production" && console.log,
// 	storage: path.join(__dirname, "db.sqlite"),
// });

const Produce = sequelize.define("Produce", {
	name: DataTypes.STRING,
	color: DataTypes.STRING,
	type: DataTypes.STRING,
});

module.exports = exports = { Produce, sequelize };
