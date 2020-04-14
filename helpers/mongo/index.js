'use strict';

const { connection, Schema } = require("./connection");
const { errorPaths } = require("./error");

module.exports = {
	connection,
  Schema,
  errorPaths
};
