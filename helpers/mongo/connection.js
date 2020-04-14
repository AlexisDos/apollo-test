'use strict';

const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost:27017/project-test', {useNewUrlParser: true,useUnifiedTopology: true});
const Schema = mongoose.Schema;

module.exports = {
	connection,
	Schema
};
